import cron from 'node-cron';

import { syncDB } from './tasks/sync-db.js';

console.log('Starting the app');

cron.schedule('1-59/5 * * * * *', syncDB);
