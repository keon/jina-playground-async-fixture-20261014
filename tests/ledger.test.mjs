import assert from 'node:assert/strict';
import test from 'node:test';
import {charge} from '../ledger.mjs';
test('ordinary debit and ordinary discount', () => {
  assert.equal(charge(1000, 300), 700);
  assert.equal(charge(1000, 300, 100), 800);
});
test('insufficient funds and invalid amounts', () => {
  assert.throws(() => charge(50, 100), /Insufficient/);
  assert.throws(() => charge(-1, 1), /Invalid/);
});
