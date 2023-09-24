import React, { useState, useEffect } from "react";
// import { pedirProductos } from "../../helpers/pedirProducto";
import { getFirestore } from "../../firebase/fire";
import Spinner from "react-bootstrap/Spinner";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const productos = db.collection("productos");

    // .doc nos referimos a nuestros documentos dentro de firestore
    const item = productos.doc(itemId);

    item
      .get()
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return <section>{loading ? <Spinner /> : <ItemDetail {...item} />}</section>;
};
