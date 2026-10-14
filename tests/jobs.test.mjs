import assert from 'node:assert/strict';
import test from 'node:test';
import {startJob} from '../jobs.mjs';
test('a scheduled job completes through its declared integration timer', {timeout: 170000}, async () => {
  assert.equal(await startJob(), 'completed');
});
test('cancellation clears the timer and rejects with the original reason', async () => {
  const controller = new AbortController();
  const pending = startJob({signal: controller.signal});
  const reason = new Error('caller cancelled');
  controller.abort(reason);
  await assert.rejects(pending, error => error === reason);
});
