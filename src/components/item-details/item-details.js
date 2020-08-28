import React from "react";

import './item-details.css'
import ErrorButton from "../error-button/error-button";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

const ItemDetails = (props) => {

    const {image, name, item, children: record} = props;

    return (
        <div className="item-details card">
            <img className="item-image"
                 src={image}
                 alt="item"/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(record, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
                <ErrorButton/>
            </div>
        </div>
    );
}

export default ItemDetails;




