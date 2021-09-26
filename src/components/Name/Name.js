import React from 'react';
import './Name.css'

const Name = (props) => {
    // const { name } = props;
    // let nameList;
    // for (const cart of props.cart) {
    //      const nameList = cart.name;
    // }
    console.log()
    return (
        <div className='name'>
            {props.person.name}
        </div>
    );
};

export default Name;