function Account() {
  this.balance = 0;
  this.balanceHistory = []
}

Account.prototype.displayBalance = function() {
  return this.balance;
}

Account.prototype.displayBalanceHistory = function() {
  return this.balanceHistory;
}

Account.prototype.depositAmount = function(amount, date) {
  this.balance += amount;
  this.balanceHistory.push({date: date, credit: amount, debit: 0, balance: this.balance})
}

Account.prototype.withdrawAmount = function(amount, date) {
  this.balance -= amount;
  this.balanceHistory.push({date: date, credit: 0, debit: amount, balance: this.balance})
}

Account.prototype.printStatement = function() {
  var bankStatement = "date || credit || debit || balance" + '\n';
  transactionHistory = this.balanceHistory.reverse()
  transactionHistory.forEach(function(transaction) {
    bankStatement += transaction.date + " || " + transaction.credit + " || " + transaction.debit+ " || " + transaction.balance + '\n'
  });
  return bankStatement;
}
