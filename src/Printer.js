function Printer() {}

Printer.prototype.printStatement = function(account) {
  var bankStatement = "date || credit || debit || balance" + '\n';
  transactionHistory = account.displayBalanceHistory().reverse()
  transactionHistory.forEach(function(transaction) {
    bankStatement += transaction.date + " || " + transaction.credit + " || " + transaction.debit+ " || " + transaction.balance + '\n'
  });
  return bankStatement;
}
