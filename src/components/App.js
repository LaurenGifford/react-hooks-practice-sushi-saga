import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(setSushis(data))
  }, [])


  return (
    <div className="app">
      <SushiContainer sushis={sushis}/>
      <Table plates={plates} />
    </div>
  );
}

export default App;
