describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should start account balance with 0", function() {
    account.displayBalance();
    expect(account.balance).toEqual(0);
  });

  describe('#depositAmount', function() {
    it('desposits money', function() {
      account.depositAmount(1000);
      expect(account.balance).toEqual(1000);
    });
  });

  describe('#withdrawAmount', function() {
    it('withdraws money', function() {
      account.depositAmount(1000);
      account.withdrawAmount(1000);
      expect(account.balance).toEqual(0);
    });
  });
});
