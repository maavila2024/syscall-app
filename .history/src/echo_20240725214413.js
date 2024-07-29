import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from axios;

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_KEY, // ou process.env.VUE_APP_PUSHER_KEY para Vue CLI
    cluster: import.meta.env.VITE_PUSHER_CLUSTER, // ou process.env.VUE_APP_PUSHER_CLUSTER para Vue CLI
    forceTLS: true,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios.post('api/broadcasting/auth', {
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
