function TransactionHistory() {
  this.history = [];
}

TransactionHistory.prototype.storeCreditHistory = function(date, amount, balance) {
  this.history.push(new Transaction(date, amount, "", balance))
}

TransactionHistory.prototype.storeDebitHistory = function(date, amount, balance) {
  this.history.push(new Transaction(date, "", amount, balance))
}
