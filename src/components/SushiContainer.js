import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, onSushiClick, onMoreSushisClick}) {

  const renderSushis = sushis.map(sushi => (
    <Sushi 
      sushi={sushi}
      key={sushi.id}
      onSushiClick={onSushiClick}
    />
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
