import {createContext, useState} from 'react'

import {getProductData} from "../data/products.js";

export const CartContext = createContext({
    products: [],
    getProductQuantity: () => {},
    addProductToCart : () => {},
    removeProductFromCart: () => {},
    deleteFromCart: () => {},
    getTotalAmount: () => {}
})


export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    const getProductQuantity = (id) => {
       const quantity =  cartProducts.find((item) => item.id === id)?.quantity

        if (quantity === undefined) return 0

        return quantity
    }

    const addProductToCart = (id) => {
        const quantity = getProductQuantity(id);
        if (quantity === 0){
            setCartProducts([...cartProducts, {id : id, quantity: 1}])
        }else {
            setCartProducts(
                cartProducts.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item)
            )
        }

    }

    const removeProductFromCart = (id) => {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item)
            )
        }
    }

    const deleteFromCart = (id) => {
        setCartProducts((cartProducts) =>
            cartProducts.filter((item) => {
                return item.id !== id
            })
        )
    }

    const getTotalAmount = () => {
        let totalAmount = 0

        cartProducts.map((item) => {
            const productData = getProductData(item.id)

            totalAmount += productData.price * item.quantity
        })

        return totalAmount
    }



    const ContextValue = {
        products: cartProducts,
        getProductQuantity,
        addProductToCart,
        removeProductFromCart,
        deleteFromCart,
        getTotalAmount
    }

    return(
        <CartContext.Provider value={ContextValue}>
            {children}
        </CartContext.Provider>
    )
}
