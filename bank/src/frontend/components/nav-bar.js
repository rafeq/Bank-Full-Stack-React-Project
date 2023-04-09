import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/nav-bar-style.css'

function NavBar() {

  const [transactions, setTransactions] = useState("");

  function getTransactions(){
      fetch("http://localhost:4000/transactions")
          .then((res) => res.json())
          .then((data) => setTransactions(data));
  }
  useEffect(() => {
      setTimeout(getTransactions, 10)
  }, [transactions]);

  function balance(){
    let sum=0
    for (const transaction of transactions) {
      sum += transaction.amount
    }
    return sum
  }
  let tempBalance=balance()
  return (
        <div id='navcontainer'>
          <Link to="/" className='nav'>Transactions</Link>
          <Link to="/operations" className='nav' >Operations</Link>
          <Link to="/breakdown" className='nav' >Breakdown</Link>
          <span>Balance:${tempBalance}</span>
        </div>

  );
}

export default NavBar;