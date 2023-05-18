import React, { useEffect, useState } from "react";
// import { pedirProductos } from "../../helpers/pedirProducto";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { HeaderContainer } from "../HeaderContainer/HeaderContainer";
import { SectionIntro } from "../SectionIntro/SectionIntro";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase/config'

const ItemListContainer = () => {
  
  const [items, setItems] = useState([])
  
  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

  

  // ***********************
  // Iniciamos efecto montaje, con loading en "true"
  // setLoading(true)
  // pedirProductos()
  //   .then((res) =>{
  //     if(categoryId){
  //       setItems(res.filter(prod => prod.category === categoryId))
  //     }else {
  //       setItems(res)
  //     }
      
      
  //   })
  //   .catch((error) => console.log(error))
  //   .finally(() =>{setLoading(false)})


    // Resumido if y else con operadores ternarios
    // useEffect(() =>{
    //   setLoading(true)
    //   const db = getFirestore()
  
    //   const productos = categoryId
    //     ?db.collection('productos').where('category', '==', categoryId)
    //     : db.collection('productos')
    //     productos.get()
    //     .then((res) => {
    //             const newItem = res.docs.map((doc) => {
    //               return { id: doc.id, ...doc.data() };
    //             });
    //             console.table(newItem);
    //             setItems(newItem);
    //           })
    //           .catch((err) => console.log(err))
    //           .finally(() => {
    //             setLoading(false);
    //           });
  
    // }, [categoryId, setLoading])
 

  useEffect(() =>{
    setLoading(true)

    const db = getFirestore();

    const productos = db.collection('productos')

    if(categoryId){
      const filtrado = productos.where('category', '==', categoryId)
      filtrado.get()
      .then((res) =>{
        const newItem = res.docs.map((doc) =>{
          return{id: doc.id, ...doc.data()}
        })
        setItems(newItem)
      })
      .catch((err) => console.log(err))
      .finally(() =>{
        setLoading(false)
      })
    }else{
      productos.get()
        .then((res) =>{
          const newItem = res.docs.map((doc) =>{
            return {id: doc.id, ...doc.data()}
          })
          console.table(newItem)
          setItems(newItem)
        })
        .catch((err) => console.log(err))
        .finally(() =>{
          setLoading(false)
        })
    }
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
