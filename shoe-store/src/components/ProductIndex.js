import { Link } from 'react-router-dom';

import './product.css';

//importing some of the images from the system
import greymen from "./images/grey.jpg"
import grey from "./images/4.jpg";
import darkblue from "./images/5.jpg";
import pink from "./images/pink shoes.jpeg";
import red from "./images/2.jpg";
import white from "./images/3.jpg";

//importing material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cx from 'classnames';

import React from 'react';

//importing

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    image:{
        height: 250,
    }
  });

export const ProductIndex = () => {

    const classes = useStyles();

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
    return (
        <div className={cx('product', 'topbot')}>
                {Object.entries(shoes).map(([productId, {name, img, price}]) =>
                    (
                        <Card key={productId} className={cx(classes.root, "card")}>
                                    
                            <CardActionArea>
                                    
                                <CardMedia
                                     className={cx(classes.media, classes.image)}
                                    image={img}
                                    title={name}
                                />
                                 <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <Link className={"Typography"} to={productId}>{name}</Link> 
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Get yourself ready to look smart with this simple and stylish lookiing shoes
                                                </Typography>
                                                <h3>${price}</h3>
                                 </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to={productId} className={"Link"}>
                                        <button className={"cards-button"}>
                                        View Product
                                        </button>
                                    </Link>
                            </CardActions>
                        </Card>
                         
                    ) 
                )}
        </div>
    )
}
