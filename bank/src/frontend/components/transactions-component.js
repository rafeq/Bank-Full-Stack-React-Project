import Transaction from './transaction-component'
import { useState, useEffect } from 'react'
import '../style/transactions-style.css'

function Transactions() {
    const [transactions, setTransactions] = useState("");

    function getTransactions(){
        fetch("http://localhost:4000/transactions")
            .then((res) => res.json())
            .then((data) => setTransactions(data));
    }
    useEffect(() => {
        setTimeout(getTransactions, 10)
    }, [transactions]);
   


    let transactionsArr = Array.from(transactions)

     function componentDidMount(vendor) {

         fetch(`http://localhost:4000/transactions/${vendor}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then((data) => setTransactions(data));
    }


    return (
        <div className='newdiv'>
            {transactionsArr.map((transaction, index) =>
                <Transaction key={index} func={componentDidMount} transactionArr={transaction} />)}
        </div>
    )
}

export default Transactions;