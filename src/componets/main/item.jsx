import React, { useContext, useEffect, useState } from 'react';
import '../style/card.css';
import '../style/boton.css';
import Swal from 'sweetalert2';
import { CartContext } from '../context/cartContext';



const Items =({info})=>{
  const {_id ,price, thumbnail, title} = info
  const {addProduct} = useContext(CartContext)
  const  infouser = JSON.parse(localStorage.getItem('user'))
  
  const addProducts = (async(id)=>{
     if(!infouser){
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Para Agregar Productos debe Iniciar Sesion!',
       
       })


     }else{
         const product = await addProduct(id, infouser.cart)
         Swal.fire({
            icon: 'success',
            title: 'OK',
            text: 'Producto Agregado',
          
          })
     }
    
  })

    
    return(
        <div className="col-md-4  d-flex justify-content-center m-2">
             <img src={thumbnail} className="img-fluid img-card" width="200" alt={title}/>
            <div className="col-md-4 titulo">
             <div className="card-body text-center">
              <h5 className="card-title card-titulo ">{title}</h5>
              <p className="card-text precio ">$ {price}</p>
               <button onClick={()=> addProducts(_id)}>Agregar</button>
             </div>
          </div>
        </div>
         
    )
}
export default Items;