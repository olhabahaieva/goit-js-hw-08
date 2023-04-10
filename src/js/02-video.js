import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds))
  }, 1000));

const storedTime = localStorage.getItem(STORAGE_KEY);
if (storedTime !== null) {
player.setCurrentTime(parseFloat(storedTime)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    console.log(`Player seeked to ${seconds} seconds.`);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
}