import React, {useState, useEffect} from 'react';
import ItemsList from './itemList';
import axios from 'axios';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
      const renderProducts = async()=>{
        try {  
          const res = await axios({
          url:`https://backend-final-coder-production.up.railway.app/api/products`,
          method: 'GET',
          withCredentials: true,
      })         
        const data = res.data.payload
          setData(data.docs)
          console.log(data)
        } catch (error) {
          console.log("aqui")
        console.log(error)  
      }}
      renderProducts() 
  }, []);




 
  return (
     <div className="container-fluid ">
        <h1 className="text-center">{`Bienvenido a Tu Tienda Online!!!"`}</h1>
         {<ItemsList datos={data} />}
    </div>
  )
}
export default ItemListContainer;
