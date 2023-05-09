import React, { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirProducto";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { SectionIntro } from "../SectionIntro/SectionIntro";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const [items, setItems] = useState([])
  
  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

  
 

  useEffect(() =>{
    // Iniciamos efecto montaje, con loading en "true"
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        if(categoryId){
          setItems(res.filter(prod => prod.category === categoryId))
        }else {
          setItems(res)
        }
        
        
      })
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [categoryId])
  
  
  return (
    <div>
      {
        loading ?
          <Spinner /> :
          <>
          <HeaderContainer />
          <SectionIntro />
          <ItemList productos={items}/>
          </>
        }
    </div>
  );
};

export default ItemListContainer;
