import React from 'react'
import '../App.css';
//importing some of the images from the system
import greymen from "./images/grey.jpg"
import grey from "./images/4.jpg";
import darkblue from "./images/5.jpg";
import pink from "./images/pink shoes.jpeg"
import red from "./images/2.jpg";
import white from "./images/3.jpg";
import { useParams } from 'react-router-dom';

import './ProductDetails.css';

export const ProductDetails = () => {

    const shoes = {
        "grey-simple-men-shoe": {
            name: "Grey Simple Men Shoe",
            img: greymen,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: 300,
        },
        "grey-men-shoe": {
            name: "Grey Men Shoe",
            img: grey,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: 500,
        },
        "dark-blue-leather-sneakers": {
            name: "Blue-Leather Sneakers",
            img: darkblue,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: 650,
        },
        "pink-sneaker": {
            name: "Pink Sneaker",
            img: pink,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: 600,
        },
        "red-sneaker": {
            name: "Red Sneaker",
            img: red,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: 800,
        },
        "white-sneaker": {
            name: "White Sneaker",
            img: white,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: 1000,
        },
    };
    let {productId} = useParams();
    const product = shoes[productId];
    const {name, img, content, price} = product;
    
    return (
        <div  className="container">
        <div className="details">
            <img src={img} alt=""/>
            <div className={"box"}>
                <div className={"row"}>
                    <h2>{name}</h2>
                    <span>${price}</span>
                </div>
                <p>{content}</p>
                <button className={"cards-button"}>
                    Add to Cart
                </button>

            </div>
        </div>
            
    </div>
    )
}