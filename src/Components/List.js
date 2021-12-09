import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        const { items, addToCart, readonly } = this.props;
        const listItems = items ? items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    readonly={readonly}
                    addToCart={addToCart}
                />
            )) : " ";

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default List