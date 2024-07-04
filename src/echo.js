import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from 'axios';
import { useNotificationStore } from './stores/apps/notifications';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'f6c5625dc6cbfa88e79f',
  cluster: 'sa1',
  encrypted: true,
  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        axios.post('/api/broadcasting/auth', {
          socket_id: socketId,
          channel_name: channel.name
        })
        .then(response => {
          callback(false, response.data);
        })
        .catch(error => {
          callback(true, error);
        });
      }
    };
  }
});

export const initializeEcho = (userId) => {
  const notificationStore = useNotificationStore();

  echo.private(`user.${userId}`)
    .listen('InteractionCreated', (e) => {
      notificationStore.addNotification({
        title: 'Nova Interação',
        subtitle: e.interaction.comment,
        avatar: 'path/to/avatar.jpg', // Ajuste conforme necessário
      });
    });
};

export default echo;
