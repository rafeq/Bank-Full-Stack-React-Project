import { useState, useEffect } from "react";
import '../style/breakdown-style.css'
function Breakdown() {

    const [breakDownObj, setBreakDownObj] = useState({});

    function getTransactions() {
        fetch("http://localhost:4000/sumOfTransactionsPerCategory")
            .then((res) => res.json())
            .then((data) => setBreakDownObj(data));
    }
    useEffect(() => {
        setTimeout(getTransactions, 10)
    }, [breakDownObj]);


    return (
        <div>
            
            <div id="containerbreakdwon">
            <h2>BreakDown</h2>
                {Object.keys(breakDownObj).map((key) => (
                    <h3><div className="breakdwon" key={key}>{key} : {breakDownObj[key]}</div></h3>
                ))}
            </div>
        </div>
    )
}
export default Breakdown;
