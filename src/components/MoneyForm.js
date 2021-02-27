import React, {useState} from "react";

function MoneyForm({onAddMoney}) {
    const [money, setMoney] = useState(0)

    function moneyMoney(e) {
        e.preventDefault()
        onAddMoney(money)
    }

    return (
        <form onSubmit={(e) => moneyMoney(e)}>
            <label>Enter amount to add to wallet!</label>
            <input 
            onChange={(e) => setMoney(e.target.value)}
            type="number"
            min={0}
            max={100}
            value={money}>
            </input>
            <input type="submit" value="Add!"></input>
        </form>
    )
}

export default MoneyForm