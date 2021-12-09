import React from 'react';
import List from './List';

function ShoppingCart({items, emptyCart}) {

    return (
        <div className="shoppingCart">
            <h1>Winkelmand</h1>
            <List 
                items={items}
                readonly={true}
                />
             <button onClick={emptyCart}>Winkelmand legen</button>
        </div>
    )
}

export default ShoppingCart