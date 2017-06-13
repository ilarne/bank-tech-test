describe("TransactionHistory", function() {
  var transactions;
  var account;

  beforeEach(function() {
    account = new Account();
    transactions = new TransactionHistory();
  });

  it("should start balance history as empty", function() {
    expect(transactions.balanceHistory).toEqual([])
  });

  describe('#storeCreditHistory', function() {
    it('updates credit history', function() {
      transactions.storeCreditHistory('14/01/2012', 50, 50)
      expect(transactions.balanceHistory).toEqual([{date: '14/01/2012', credit: 50, debit: "", balance: 50}])
    });
  });

  describe('#storeDebitHistory', function() {
    it('updates debit history', function() {
      transactions.storeDebitHistory('14/01/2012', 50, 50)
      expect(transactions.balanceHistory).toEqual([{date: '14/01/2012', credit: "", debit: 50, balance: 50}])
    });
  });
});
