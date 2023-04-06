import React from 'react'
import '../style/transaction-style.css'
function Transaction(props) {
    let amount = props.transactionArr.amount;
    let vendor = props.transactionArr.vendor;
    let category = props.transactionArr.category;
    let func=props.func;
    return (
        <div id='container'>
            <span className='card' style={{ backgroundColor: '#E7FEFF' }}>
                {vendor}
            </span >
            {amount > 0 ?
                <span className='card' style={{ backgroundColor: '#B9FBB2' }}>
                    {amount}
                </span> :
                <span className='card' style={{ backgroundColor: '#F2A7A5' }}>{amount} </span>
            }

            <span className='card'>
                {category}
            </span>
            <span className='card'>
                <button onClick={()=>{func(vendor)}}>delete</button>
            </span>

        </div>

    )
}
export default Transaction;