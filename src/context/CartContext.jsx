import { createContext, useState, useContext,useEffect } from 'react'
const CartContext = createContext()
export function CartProvider({ children }) {
    const [cart, setcart] = useState(()=>{
        const savedCart = localStorage.getItem("my_cart");
        return savedCart ? JSON.parse(savedCart):[];
    });
    useEffect(()=>{
        localStorage.setItem("my_cart",JSON.stringify(cart));
    },[cart]);
    const addToCart = (product) => {
        const newproduct = {...product,order_id:Date.now()}
        setcart([...cart, newproduct]);
    };
    const removeFromeCart=(productid)=>{
        console.log(productid);
        console.log(cart);
        const Updatedcart=cart.filter((product)=>product.order_id!=productid);
        console.log(Updatedcart);

        setcart(Updatedcart);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromeCart }}>
            {children}
        </CartContext.Provider>
    )
} export const useCart = () => useContext(CartContext);