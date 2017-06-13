describe("Transaction", function() {
  var transaction;

  it("should pull in correct date", function() {
    transaction = new Transaction('14/01/12', 10, "", 50);
    expect(transaction.date).toEqual('14/01/12')
  });

  it("should pull in correct credit", function() {
    transaction = new Transaction('14/01/12', 10, "", 50);
    expect(transaction.credit).toEqual(10)
  });

  it("should pull in correct debit", function() {
    transaction = new Transaction('14/01/12', "", 50, 50);
    expect(transaction.debit).toEqual(50)
  });

  it("should pull in correct balance", function() {
    transaction = new Transaction('14/01/12', 10, "", 100);
    expect(transaction.balance).toEqual(100)
  });
});
