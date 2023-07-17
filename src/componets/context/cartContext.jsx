import axios from "axios";
import React,{createContext, useState } from "react";

export const CartContext = createContext([]); 

const CartProvider = (props)=>{
      const [cart, setCart] = useState([])

    const addProduct =(async(id, cart)=>{
        try {
            const res = await axios({
                url:`http://backend-final-coder-production.up.railway.app/api/carts/${cart}/product/${id}`,
                method: 'POST',
                mode: 'no-cors',
                headers: { "Content-type": "application/json"},
                //withCredentials: true,
                
                })         
                const data = res.data.cart
                setCart(data)
                console.log(data)

        } catch (error) {
            console.log(error)
        }
       
           
        })
        const TotalProducts =()=>{
            let cantidad = 0; 
           
            
            return cantidad
        }

        return(
        <CartContext.Provider value={{cart,TotalProducts,addProduct}}

        >
          {props.children}     
        
        </CartContext.Provider>
        );
    };
export default CartProvider ;