describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should start account balance with 0", function() {
    account.displayBalance()
    expect(account.balance).toEqual(0)
  });

  describe('#depositAmount', function() {
    it('desposits money', function() {
      account.depositAmount(1000)
      expect(account.balance).toEqual(1000);
    });

    it('updates balance history', function() {
      account.depositAmount(50, '14/01/2012')
      expect(account.balanceHistory).toEqual([{date: '14/01/2012', credit: 50, debit: 0, balance: 50}])
    });
  });

  describe('#withdrawAmount', function() {
    it('withdraws money', function() {
      account.depositAmount(1000)
      account.withdrawAmount(1000)
      expect(account.balance).toEqual(0);
    });

    it('updates balance history', function() {
      account.balance = 1000;
      account.withdrawAmount(50, '14/01/2012')
      expect(account.balanceHistory).toEqual([{date: '14/01/2012', credit: 0, debit: 50, balance: 950}])
    });
  });

  describe('#withdrawAmount', function() {
    it('withdraws money', function() {
      account.depositAmount(1000)
      account.withdrawAmount(1000)
      expect(account.balance).toEqual(0);
    });
  });

  describe('#printStatement', function() {
    it('prints transaction history', function() {
      account.depositAmount(1000, '16/01/2012')
      account.depositAmount(1000, '15/01/2012')
      account.printStatement()
      expect(account.printStatement()).toEqual("date || credit || debit || balance"+'\n'+
      "16/01/2012 || 1000 || 0 || 1000"+'\n'+
      "15/01/2012 || 1000 || 0 || 2000"+'\n');
    });
  });
});
