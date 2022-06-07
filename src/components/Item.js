import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleClick(){
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        onClick={handleClick} 
        className={inCart ? "remove" : "add"}>
          {inCart ? "Remove from" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
