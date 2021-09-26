import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Container.css'

const Container = () => {
    const [person, SetPerson] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('./person.Json')
            .then(res => res.json())
            .then(data => SetPerson(data))
    },[])

    const handleNetWorth = person => {
        const newCart = [...cart, person]
        setCart(newCart);
        console.log(newCart)
    }
    return (
        <div className="container">
            <div className="person-container">
                {
                    person.map(person=><Person key={person.name} person={person} handleNetWorth={handleNetWorth}></Person>)
                }
            </div>
            
            <div className="cart-container">
                <Cart key={person.name} cart={cart}  ></Cart>
            </div>
        </div>
    );
};

export default Container;