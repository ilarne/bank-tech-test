describe("Printer", function() {
    var account;
    var printer;

  describe('#printStatement', function() {
    it('prints transaction history', function() {
      var account = new Account;
      var printer = new Printer;
      account.depositAmount(1000, '15/01/2012')
      account.depositAmount(1000, '16/01/2012')
      expect(printer.printStatement(account)).toEqual("date || credit || debit || balance"+'\n'+
      "16/01/2012 || 1000 || 0 || 2000"+'\n'+
      "15/01/2012 || 1000 || 0 || 1000"+'\n');
    });
  });
});
