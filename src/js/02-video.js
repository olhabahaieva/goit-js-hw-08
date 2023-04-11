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
player.setCurrentTime(parseFloat(storedTime))
}