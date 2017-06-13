describe("TransactionHistory", function() {
  var transactions;

  beforeEach(function() {
    transactions = new TransactionHistory();
  });

  it("should start transaction history as empty", function() {
    expect(transactions.history).toEqual([])
  });

  describe('#storeCreditHistory', function() {
    it('updates credit history', function() {
      transactions.storeCreditHistory('17/10/2012', 50, 50)
      expect(transactions.history[0].date).toEqual('17/10/2012')
    });
  });

  describe('#storeDebitHistory', function() {
    it('updates debit history', function() {
      transactions.storeDebitHistory('14/01/2012', 50, 50)
      expect(transactions.history[0].date).toEqual('14/01/2012')
    });
  });
});
