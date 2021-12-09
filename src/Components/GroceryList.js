import React from 'react';
import List from './List';
import InputField from './InputField';

function GroceryList({items, addToList, emptyList, addToCart}) {
   
    return (
        <div className="groceryList">
            <h1>Boodschappen</h1>

            <InputField 
                onSubmit={addToList}
            />

            <List 
                items={items} 
                addToCart={addToCart}
            />

            <button onClick={emptyList}>
                Lijst Leegmaken
            </button>
        </div>
    )
}

export default GroceryList