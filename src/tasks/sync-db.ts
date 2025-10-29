import { log } from '../utils/logger.js';

let times = 0;

function syncDB() {
  times++;
  log(`Tick every multiple of 5: ${times}`);

  return times;
}

export { syncDB };
