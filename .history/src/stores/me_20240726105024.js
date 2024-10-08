import { defineStore } from 'pinia';
import axios from "axios";
import { useStorage } from '@vueuse/core';

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
    currentTeamToken: useStorage('team_id', ''),
  }),    

  actions: {
    async getMe() {
      try {
        const response = await axios.get('api/me');
        this.user = response.data.data;
        this.setDefaultTeam();
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    },

    async markNotificationComplete(id) {
      try {
        await axios.get(`api/users/notifications/${id}`);
        this.user.notifications = this.user.notifications.filter(n => n.id != id);
      } catch (error) {
        console.error('Error marking notification as read:', error);
      }
    },

    async markAllNotificationComplete() {
      try {
        await axios.get('api/users/notifications');
        this.user.notifications = [];
      } catch (error) {
        console.error('Error marking all notifications as read:', error);
      }
    },

    setDefaultTeam() {
      if (this.user && this.user.teams && !this.user.teams.some(o => o.token === this.currentTeamToken)) {
        const defaultTeam = this.defaultTeam;
        if (defaultTeam) {
          this.changeTeam(defaultTeam.token);
        } else {
          console.warn("No default team found for the user");
        }
      }
    },

    changeTeam(teamToken) {
      if (this.user && this.user.teams && this.user.teams.some(o => o.token === teamToken)) {
        this.currentTeamToken = teamToken;
      } else {
        console.warn("Team token not found in user's teams");
      }
    },
  },

  getters: {
    isLoggedIn: (state) => !!state?.user?.id,
    defaultTeam: (state) => state?.user?.teams.find(o => o.default),
    currentTeam: (state) => {
      const team = state?.user?.teams.find(o => o.token === state.currentTeamToken);
      if (team) {
        return {
          ...team,
          show_ads: team.is_admin,
        };
      } else {
        return {};
      }
    }
  }
});
