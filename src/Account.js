function Account() {
  this.balance = 0;
  this.balanceHistory = []
}

Account.prototype.depositAmount = function(amount, date) {
  this.balance += amount;
  this.balanceHistory.push({date: date, credit: amount, debit: "", balance: this.balance})
}

Account.prototype.withdrawAmount = function(amount, date) {
  if (this.balance - amount < 0) {
    throw("You don't have enough funds.")
  } else {
    this.balance -= amount;
    this.balanceHistory.push({date: date, credit: "" , debit: amount, balance: this.balance})
  }
}
