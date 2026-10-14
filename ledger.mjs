export function charge(balance, price, discount = 0) {
  if (![balance, price, discount].every(Number.isSafeInteger) || balance < 0 || price < 0 || discount < 0) throw new TypeError('Invalid cents');
  const debit = price - discount;
  if (debit > balance) throw new Error('Insufficient balance');
  return balance - debit;
}
