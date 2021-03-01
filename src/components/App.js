import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoneyForm from "./MoneyForm"

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [wallet, setWallet] = useState(100)
  const [sushiIndex, setSushiIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data.slice(sushiIndex,sushiIndex+4)))
  }, [sushiIndex])
  
  function handleEatSushi(clickedSushi) {
    console.log(clickedSushi.id, sushiIndex)
    // const notEaten = sushis.filter(sushi => sushi.id !== clickedSushi.id)
    // setSushis([...notEaten])
    setEatenSushis([...eatenSushis, clickedSushi.id])
    setWallet(wallet - clickedSushi.price)
  }

  function getMoreSushis() {
    sushiIndex > 96 ? setSushiIndex(0) : setSushiIndex(sushiIndex + 4)
  }

  function handleAddMoney(moreMoney) {
    console.log(moreMoney)
    setWallet(wallet => (wallet + parseInt(moreMoney)))
  }

  return (
    <div className="app">
      {wallet > 0 ? 
      <SushiContainer 
        sushis={sushis}
        eatenSushis={eatenSushis}
        onSushiClick={handleEatSushi}
        onMoreSushisClick={getMoreSushis}
      /> : null }
      <button 
        onClick={() => setShowForm(!showForm)}>
          More Sushi Money!
      </button>
      {showForm ? <MoneyForm onAddMoney={handleAddMoney} /> : null}
      <Table 
        plates={eatenSushis} 
        wallet={wallet}
      />
    </div>
  );
}

export default App;
