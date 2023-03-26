import React from 'react';
import { useParams } from 'react-router';

function ProductDetails() {
    const {productId} = useParams()
  return (
    <div>
        You are viewing {productId} product
    </div>
  );
}

export default ProductDetails;
