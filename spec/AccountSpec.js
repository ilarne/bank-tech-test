describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should start account balance with 0", function() {
    expect(account.balance).toEqual(0)
  });

  describe('#depositAmount', function() {
    it('deposits money', function() {
      account.depositAmount(1000)
      expect(account.balance).toEqual(1000);
    });
  });

  describe('#withdrawAmount', function() {
    it('withdraws money', function() {
      account.depositAmount(1000)
      account.withdrawAmount(1000)
      expect(account.balance).toEqual(0);
    });

    it('stops you withdrawing more than you have', function() {
      expect(function(){account.withdrawAmount(100)}).toThrow("You don't have enough funds.");
    });
  });

  describe('#withdrawAmount', function() {
    it('withdraws money', function() {
      account.depositAmount(1000)
      account.withdrawAmount(1000)
      expect(account.balance).toEqual(0);
    });
  });
});
