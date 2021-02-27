import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis}) {

  const renderSushis = sushis.map(sushi => (
    <Sushi 
      sushi={sushi}
      key={sushi.id}
    />
  ))
  return (
    <div className="belt">
      {renderSushis}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
