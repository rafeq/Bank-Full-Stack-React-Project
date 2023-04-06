import { useState } from "react"
import '../style/add-operation-style.css'

function AddOperation() {
    const [amount, setAmount] = useState(0)
    const [vendor, setVendor] = useState("")
    const [category, setcategory] = useState("")

    const deposit = (event) => {
        fetch('http://localhost:4000/transactions', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount,
                vendor: vendor,
                category: category,
            }),
        });
        setAmount('');
        setVendor('');
        setcategory('');
    }
    const withdraw = (event) => {
        fetch('http://localhost:4000/transactions', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: -amount,
                vendor: vendor,
                category: category,
            }),
        });
        setAmount('');
        setVendor('');
        setcategory('');
    }
    return (
        <div id="opetationcontainer">
            <form >
                <h2>Insert Transactions</h2>
                <div className="opetationdiv">
                    <input
                    className="opetation"
                    placeholder="Transaction amount"
                    type="text"
                    onChange={event => setAmount(event.target.value)}
                    value={amount}
                />
                </div>
                <div className="opetationdiv">
                    <input
                    className="opetation"
                    placeholder="Transaction vendor"
                    type="text"
                    onChange={event => setVendor(event.target.value)}
                    value={vendor}
                />
                </div>
                <div className="opetationdiv">
                    <input
                    className="opetation"
                    placeholder="Transaction category"
                    type="text"
                    onChange={event => setcategory(event.target.value)}
                    value={category}
                />
                </div>
               <button className="btn1" onClick={deposit} type="submit" >Deposit</button>
               <button className="btn2" onClick={withdraw} type="submit" >Withdraw</button>
            </form>
        </div>
    )
}
export default AddOperation;