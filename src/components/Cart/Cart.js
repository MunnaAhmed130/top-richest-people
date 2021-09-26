import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import Name from '../Name/Name';

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    const { cart } = props;
    // console.log(cart)
    const totalReducer = (previous, person) => previous + person.net_worth
    const total = cart.reduce(totalReducer, 0)



    return (
        <div className="cart">
            <h4><span>{element} </span> person added : {props.cart.length}</h4>
            <h3>total worth : <br /> ${total}</h3>
            
             {/* for(const name of cart){<Name>{cart.name}</Name>} */}
             
            {cart.map(person => <Name person={person}></Name>)}
        </div>
    );
};

export default Cart;