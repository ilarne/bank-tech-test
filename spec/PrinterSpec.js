describe("Printer", function() {

  var account = new Account;
  var printer = new Printer;

  it('prints transaction history', function() {
    account.depositAmount(1000, '10/01/2012')
    account.depositAmount(2000, '13/01/2012')
    account.withdrawAmount(500, '14/01/2012')
    expect(printer.printStatement(account)).toEqual("date || credit || debit || balance"+'\n'+
    "14/01/2012 ||  || 500 || 2500"+'\n'+
    "13/01/2012 || 2000 ||  || 3000"+'\n'+
    "10/01/2012 || 1000 ||  || 1000"+'\n');
  });
});
