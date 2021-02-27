import React, {useState} from "react";

function Table({ plates = [], wallet }) {

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        {wallet > 0 ? `You have: $${wallet} remaining!` : `No money left for sushis`}
        {/* You have: ${bill} remaining! */}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
