import {Row, Col} from 'react-bootstrap'
import{productsList} from "../data/products.js";
import Product from "../components/Product.jsx";

const Shop = () => {
    return (
        <Row
            xs={1}
            md={4}
            className='g-4'
        >
            {
                productsList.map((item) => (
                    <Col align='center' key={item.id}>
                        <Product
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                        />
                    </Col>
                ))
            }
        </Row>
    );
};

export default Shop;
