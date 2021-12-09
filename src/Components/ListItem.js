import React from 'react';

function ListItem( {addToCart, item, readonly} ) {
    return (
        <li
            className="list-item"
            key={item.id}
            onClick={addToCart}
            value={item.title}
        >
            {readonly ? ` ${item.amount}x  ` : " "}
            {item.title || " " }
        </li>
    )
}

export default ListItem