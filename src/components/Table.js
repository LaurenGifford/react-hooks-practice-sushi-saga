import React, {useState} from "react";

function Table({ plates = [] }) {
  // const [wallet, setWallet] = useState(100)

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

    const sushiPrices = plates.map(plate => plate.price)
    const bill = 100 - sushiPrices.reduce((sushiA, sushiB) => {
      return sushiA + sushiB}, 0)
    // setWallet(wallet => wallet - bill)

  return (
    <>
      <h1 className="remaining">
        You have: ${bill} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
