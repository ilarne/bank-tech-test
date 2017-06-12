function Account() {
  this.balance = 0;
}

Account.prototype.displayBalance = function() {
  return this.balance;
}

Account.prototype.depositAmount = function(n) {
  this.balance += n;
}

Account.prototype.withdrawAmount = function(n) {
  this.balance -= n;
}
