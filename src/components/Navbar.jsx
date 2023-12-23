import {Fragment, useContext, useState} from "react";
import { Navbar as NavbarBs, Button, Modal} from 'react-bootstrap'
import {BsCart} from "react-icons/bs";
import {CartContext} from "../context/CartContext.jsx";
import CartProduct from "./CartProduct.jsx";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const cart = useContext(CartContext)

    const productsCount = cart.products.reduce((sum, product) => sum + product.quantity, 0)

    const handleShowModal = () => {setShowModal(true)}
    const handleCloseModal = () => {setShowModal(false)}


    return (
        <Fragment>
            <NavbarBs className='border-bottom border-secondary py-4'>
                <NavbarBs.Collapse className='justify-content-start'>
                    <Button
                        variant='btn btn-outline-secondary'
                        className='text-white'
                        onClick={handleShowModal}
                    >
                        <BsCart className='mx-2' />
                        Shopping Cart ({productsCount})
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                contentClassName='bg-dark'
            >
                <Modal.Header closeButton closeVariant='white'>
                    <Modal.Title>Shopping Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        productsCount > 0 ? (
                            <>
                                {
                                    cart.products.map((product) => (
                                        <CartProduct
                                            key={product.id}
                                            id={product.id}
                                            quantity={product.quantity}
                                        />
                                    ))
                                }
                                <h3>Total Amount : {cart.getTotalAmount()}</h3>
                            </>
                            ):
                            <h3>No Products</h3>
                    }
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};

export default Navbar;
