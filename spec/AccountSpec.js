describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  it("should start account balance with 0", function() {
    account.displayBalance()
    expect(account.balance).toEqual(0)
  });

  describe('#depositAmount', function() {
    it('deposits money', function() {
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
