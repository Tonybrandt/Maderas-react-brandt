import React, { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirProducto";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";

export const ItemListContainer = (props) => {
  
  const [items, setItems] = useState([])
  
  const [loading, setLoading] = useState(false)

 

  useEffect(() =>{
    // Iniciamos efecto montaje, con loading en "true"
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        //Imprimimos la respuesta y la guardamos en el hook
        setItems(res)
        console.log(res)
      })
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [])
  
  
  return (
    <div>
      {
        loading ?
          <Spinner /> :
          <ItemList productos={items}/>
        }
    </div>
  );
};

export default ItemListContainer;
