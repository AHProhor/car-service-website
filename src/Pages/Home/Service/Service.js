import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, price, details, img, id} = props.sendService;
    return (
        <div className="serviceStyle">
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h3>Price: {price}</h3>
            <p>Details: {details}</p>   
        </div>
    );
};

export default Service;