function Printer() {}

Printer.prototype.printStatement = function(transactions) {
  var bankStatement = "date || credit || debit || balance" + '\n';
  transactionHistory = transactions.balanceHistory.reverse()
  transactionHistory.forEach(function(transaction) {
    bankStatement += transaction.date + " || " + transaction.credit + " || " + transaction.debit+ " || " + transaction.balance + '\n'
  });
  return bankStatement;
}
