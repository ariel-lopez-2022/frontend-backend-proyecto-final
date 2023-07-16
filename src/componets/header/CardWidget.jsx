import React, { useEffect, useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import '../style/CartWidge.css';
import Swal from 'sweetalert2';
import Cart from '../cart/cart';
import axios from 'axios';

const Carrito =()=>{ 
   const [cart, setCart] = useState ([])
   const [user, setUser] = useState (false)
   const dataUser = localStorage.getItem('user')

   const dataCart =(async(idCart)=>{
      try {
         const res = await axios({
            url:`https://backend-final-coder-production.up.railway.app/api/carts/${idCart}`,
            method: 'GET',
            mode: 'no-cors',
          })         
          const data = res.data.payload.products
          console.log(data)

      } catch (error) {
        console.log(error) 
      }

   }) 
   const verifyLogin =(()=>{
      const dataUser = localStorage.getItem('user')
      if (!dataUser){
         Swal.fire({
            icon: 'error',
            title: 'Para Ver Carrito',
            text: 'Iniciar Sesión',
           })
      }
      if (cart.length === 0){
         Swal.fire({
            icon: 'error',
            title: 'Carrito Vacio',
         })
      }
   })

   useEffect(() => {
        if (!dataUser){
           setUser(false)
           setCart([])
            
        } else{
            const data = JSON.parse(dataUser) 
            console.log(data.cart)
            dataCart(data.cart)                   
        }
  }, [cart]);
   
  return(
      <Link onClick={()=> verifyLogin()} style={{ textDecoration: 'none'}} >
      <div className="widge" >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
         <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
      <span>0</span>
      </div>
      </Link> 
   )
  }
 
export default Carrito;