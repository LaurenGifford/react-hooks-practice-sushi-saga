import React from "react";

function MoreButton({onMoreSushisClick}) {
  return <button onClick={() => onMoreSushisClick()}>More sushi!</button>;
}

export default MoreButton;
