function TransactionHistory() {
  this.balanceHistory = [];
}

TransactionHistory.prototype.storeCreditHistory = function(date, amount, balance) {
  this.balanceHistory.push({date: date, credit: amount, debit: "", balance: balance})
}

TransactionHistory.prototype.storeDebitHistory = function(date, amount, balance) {
  this.balanceHistory.push({date: date, credit: "", debit: amount, balance: balance})
}
