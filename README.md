# Tech Test: Bank
  
## Getting Started

### Set up

This script can be run directly from Google Chrome using Console.

1. Open Chrome.
2. Open Console: 
  - Right-click and select 'Inspect'.
  - On Mac: ⌘ + Shift + C.
  - On Windows / Linux: Ctrl + Shift + C OR F12.
 3. Click on the Console tab.
2. Copy and paste the contents of `Printer.js` and `Account.js` (found in the 'src' folder on this repo).

### Demonstration of tech test acceptance criteria

```
> var account = new Account;
> var printer = new Printer;
> account.depositAmount(1000, '10/01/2012')
> account.depositAmount(2000, '13/01/2012')
> account.withdrawAmount(500, '14/01/2012')
> printer.printStatement(account.transactions)
> "date || credit || debit || balance
> 14/01/2012 ||  || 500 || 2500
> 13/01/2012 || 2000 ||  || 3000
> 10/01/2012 || 1000 ||  || 1000
> "
```

## Running the tests

Tests are run with Jasmine. 

1. Clone this repo to local machine and navigate to the folder locally.
2. From your command line, run `$open SpecRunner.html`.
3. The tests will appear in your browser. 
