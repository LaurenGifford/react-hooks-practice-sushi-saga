import React, {useState} from "react";

function Sushi({sushi, onSushiClick}) {
  const {id, name, img_url, price} = sushi
  const [eaten, setEaten] = useState(false)

  function eatSushi() {
    if (!eaten) {
    onSushiClick(sushi)
    setEaten(true)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi()}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img 
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
