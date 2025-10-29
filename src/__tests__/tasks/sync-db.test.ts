import { describe, test, expect } from '@jest/globals';

import { syncDB } from '../../tasks/sync-db.js';

describe('Tests in Sync-DB', () => {
  test('should execute the process 2 times', () => {
    syncDB();
    const times = syncDB();
    expect(times).toBe(2);
  });
});
