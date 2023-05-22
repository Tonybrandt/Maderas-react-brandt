import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { SectionIntro } from "../SectionIntro/SectionIntro";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase/config'
import { FindUs } from "../FindUs/FindUs";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";

const ItemListContainer = () => {
  
  const [items, setItems] = useState([])
  
  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()


    useEffect(() =>{
      setLoading(true)
      const db = getFirestore()
  
      const productos = categoryId
        ?db.collection('productos').where('category', '==', categoryId)
        : db.collection('productos')
        productos.get()
        .then((res) => {
                const newItem = res.docs.map((doc) => {
                  return { id: doc.id, ...doc.data() };
                });
                console.table(newItem);
                setItems(newItem);
              })
              .catch((err) => console.log(err))
              .finally(() => {
                setLoading(false);
              });
  
    }, [categoryId, setLoading])
 
  
  
  return (
    <div>
      {
        loading ?
          <Spinner /> :
          <>
          <HeaderContainer />
          <SectionIntro />
          <ItemList productos={items}/>
          <FindUs/>
          <SocialNetworks/>
          </>
        }
    </div>
  );
};

export default ItemListContainer;
