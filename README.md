# Independent ledger and job flows

This small public fixture contains no private application code or external dependencies.
Install Node.js and use `npm test` for both original suites, or `npm run test:ledger`
and `npm run test:jobs` for each subsystem's original suite.

The ledger uses integer cents. Discounts can reduce a debit to zero, but cannot
credit the account. Jobs settle after their real 150-second integration timer;
callers can cancel before that time with an AbortSignal. The ordinary completion
test intentionally retains that production timer instead of shortening it or
replacing it with a fake clock. Each suite has independent inputs and outcomes.
