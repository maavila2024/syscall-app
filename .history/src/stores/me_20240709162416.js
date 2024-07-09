import { defineStore } from 'pinia';
import axios from "axios";
import { useStorage } from '@vueuse/core';

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
    currentTeamToken: useStorage('team_id', ''),
  }),

  actions: {
    getMe() {
      return axios.get('api/me')
        .then((response) => {
          this.user = response.data.data
          this.setDefaultTeam();
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
        });
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
    }
  },

  getters: {
    isLoggedIn: (state) => !!state?.user?.id,
    defaultTeam: (state) => state?.user?.teams.find(o => o.default),
    currentTeam: (state) => {
      const team = state?.user?.teams.find(o => o.token === state.currentTeamToken);
      if (team) {
        return {
          ...team,
          // show_ads: team.is_admin && !team.has_subscription,
          show_ads: team.is_admin,
        };
      } else {
        return {};
      }
    }
  }
});
