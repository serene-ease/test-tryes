import transactions from "./data/transactions"
console.log("//////////// Make table markup throught JS \\\\\\\\\\\\")

// makeTrasactionMarkup(transactions[1]);
// console.log(makeTrasactionMarkup(transactions[1]));

const makeTransactionTableRows = transactions.map(makeTrasactionMarkup).join('');
// console.log(makeTransactionTableRows);
const tableRef = document.querySelector('.js-transaction-table');
tableRef.insertAdjacentHTML('beforeend', makeTransactionTableRows);

function makeTrasactionMarkup({id, amount, date, business, name, type, account}) 
{
  return  `
    <tr>
        <th>${id}</th>
        <th>${amount}</th>
        <th>${date}</th>
        <th>${business}</th>
        <th>${type}</th>
        <th>${name}</th>
        <th>${account}</th>
    </tr>
        `
}










