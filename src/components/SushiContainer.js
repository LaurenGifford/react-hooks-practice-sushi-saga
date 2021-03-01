import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, eatenSushis, onSushiClick, onMoreSushisClick}) {

  const renderSushis = sushis.map(sushi => (
    // !eatenSushis.includes(sushi.id) ?
    <Sushi 
      sushi={sushi}
      key={sushi.id}
      onSushiClick={onSushiClick}
    /> 
    // : null
  ))
  return (
    <div className="belt">
      {renderSushis}
      <MoreButton 
        onMoreSushisClick={onMoreSushisClick}
      />
    </div>
  );
}

export default SushiContainer;
