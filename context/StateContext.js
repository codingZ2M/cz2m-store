import React, {createContext, useContext, useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    
    const [showCart, setShowcart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);


    const incQty = () => {
        setQty( (preQty) => preQty + 1 );
    }

    const decQty = () => {
        setQty( (preQty) => { 
            if(preQty -1 < 1) return 1;
            return preQty - 1 
        });
    }


    const onAdd = (product, quantity) => {

        const checkProductInCart = cartItems.find( (item) => item._id === product._id);

        setTotalPrice ( (preTotalPrice) =>preTotalPrice + product.price * quantity );
        setTotalQuantities( (preTotalQuantities) => preTotalQuantities + quantity);

        if (checkProductInCart) {
            
            const updatedCartItems = cartItems.map( (cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct, 
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        }
        else {
          product.quantity = quantity;
          setCartItems([...cartItems, {...product}]);
        }
        toast.success(`${qty} ${product.name} added to the cart`);
    }

    return (
        <Context.Provider
            value ={ {
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
            } }
        >
            {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);