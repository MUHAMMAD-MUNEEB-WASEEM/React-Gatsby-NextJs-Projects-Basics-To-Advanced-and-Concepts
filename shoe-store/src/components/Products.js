  
import React from 'react'

import { Outlet } from 'react-router-dom';

import '../App.css';
import Footer from './Footer/Footer';

import './product.css';


export const Products = () => {


    return (
        <>    
                <h1 className={"products"}>Products</h1>
                <Outlet className={"topbot"}/>
                <Footer />
        </>
    )
}