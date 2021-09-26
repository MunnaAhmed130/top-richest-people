import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    const element = <FontAwesomeIcon icon={faPlus} />
    console.log(props.person.name)
    const { name, age, industry, role, img, country,net_worth } = props.person;
    return (
        <div className="persons">
            <div className="person">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div>
                    <p><span>Name:</span> {name}</p>
                    <p><span>Role :</span> {role}</p>
                    <p><span>Age :</span> {age}</p>
                    <p><span>Idustry :</span> {industry}</p>
                    <p><span>Country :</span> {country}</p>
                    <p><span>Net worth</span>: ${net_worth} </p>
                    <button onClick={() => props.handleNetWorth(props.person)}>{element} Add net worth</button>
                </div>
            
            </div>
        </div>
    );
};

export default Person;