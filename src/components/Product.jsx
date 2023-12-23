import {useContext} from "react";
import {Card, Button, Form, Row, Col} from 'react-bootstrap'

import{CartContext} from "../context/CartContext.jsx";

const Product = ({id, image, title, price}) => {
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id);
    return (
        <Card className='mt-5' style={{backgroundColor: '#1a1c1e'}}>
            <Card.Body>
                <Card.Img
                    variant='top'
                    src={image}
                    height='200px'
                    style={{objectFit: 'cover'}}
                />
                <Card.Title className='text-light pt-4'>{title}</Card.Title>
                <Card.Text className='text-light'>{price}</Card.Text>
                {productQuantity > 0 ? (
                    <>
                        <Form as={Row}>
                            <Form.Label
                                column='true'
                                sm='6'
                                className='text-white'
                            >
                                Quantity: {productQuantity}
                            </Form.Label>
                            <Col sm={6}>
                                <Button
                                    onClick={() => cart.addProductToCart(id)}
                                    sm='6'
                                    className='mx-2 text-white'
                                    variant='btn btn-outline-secondary'
                                >
                                    +
                                </Button>
                                <Button
                                    onClick={() => cart.removeProductFromCart(id)}
                                    sm='6'
                                    className='mx-2 text-white'
                                    variant='btn btn-outline-secondary'
                                >
                                    -
                                </Button>
                            </Col>
                        </Form>
                        <Button
                            onClick={() => cart.deleteFromCart(id)}
                            variant='btn btn-light'
                            size='sm'
                        >
                            Delete from Cart
                        </Button>
                    </>
                ) : (
                    <Button
                        onClick={() => cart.addProductToCart(id)}
                        variant='btn btn-outline-secondary text-white'
                    >
                        Add to Card
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default Product;
