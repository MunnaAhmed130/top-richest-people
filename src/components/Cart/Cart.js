import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    for (const person of cart) {
        total = total + person.net_worth
        console.log(person.net_worth)
    }
    return (
        <div className="cart">
            <h4>person added:{props.cart.length}</h4>
            <h3>total worth: <br /> ${total}</h3>
        </div>
    );
};

export default Cart;