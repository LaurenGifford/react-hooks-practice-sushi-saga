import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [getMore, setGetMore] = useState(false)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(setSushis(data))
  }, [])

  function handleEatSushi(clickedSushi) {
    console.log(clickedSushi)
    const notEaten = sushis.filter(sushi => sushi.id !== clickedSushi.id)
    setSushis([...notEaten])
    setEatenSushis([...eatenSushis, clickedSushi])
  }

  function getMoreSushis() {
    console.log(sushis)

  }

  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis} 
      onSushiClick={handleEatSushi}
      onMoreSushisClick={getMoreSushis}
      />
      <Table plates={eatenSushis} />
    </div>
  );
}

export default App;
