function Account() {
  this.balance = 0;
  this.transactions = new TransactionHistory();
}

Account.prototype.depositAmount = function(amount, date) {
  this.balance += amount;
  this.transactions.storeCreditHistory(date, amount, this.balance)
}

Account.prototype.withdrawAmount = function(amount, date) {
  if (this.balance - amount < 0) {
    throw("You don't have enough funds.")
  } else {
    this.balance -= amount;
    this.transactions.storeDebitHistory(date, amount, this.balance)
  }
}
