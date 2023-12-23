import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {getProductData} from "../data/products.js";
import {CartContext} from "../context/CartContext.jsx";

const CartProduct = ({id, quantity}) => {
    const cart = useContext(CartContext);
    const product = getProductData(id);
    return (
        <>
            <p>{product.title}</p>
            <p>Count : {quantity}</p>
            <p>Price : {product.price * quantity}</p>
            <Button
                size='sm'
                className='mb-5 text-white'
                variant='btn btn-outline-secondary'
                onClick={() => cart.deleteFromCart(id)}
            >
                Remove
            </Button>
        </>
    );
};

export default CartProduct;
