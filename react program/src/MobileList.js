import React from "react";
import './MoblieList.css';

export default function MobileList(props) {
    const {image,title,price}=props;

    return (
        <div className="main">
            <img className="image" src={image} />
            <div>
                <h2>{title}</h2>

                <p>{price}</p>
                <button>Add to Cart</button>
            </div>


        </div>
    )
}