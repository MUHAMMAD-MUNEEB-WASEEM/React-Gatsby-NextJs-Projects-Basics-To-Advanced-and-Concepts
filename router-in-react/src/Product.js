import React from 'react';
import { Outlet } from 'react-router';

function Product() {
  return (
    <div>
        <h1>Welcome to Products page</h1>
        <hr/>
        <div>
            <Outlet/>
        </div>
    </div>

  );
}

export default Product;
