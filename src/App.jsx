import {Routes, Route} from 'react-router-dom'
import {Container} from "react-bootstrap";
import {CartProvider} from './context/CartContext.jsx'

//Components
import Navbar from "./components/Navbar.jsx";
import Shop from './pages/Shop.jsx'

const App = () => {
    return (
        <CartProvider>
            <Container>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />}/>
                </Routes>
            </Container>
        </CartProvider>
    );
};

export default App;
