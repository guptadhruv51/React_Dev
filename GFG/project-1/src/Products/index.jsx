import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./productCard";
import { Container, Row } from "react-bootstrap";

const Products=()=>
{
  const url='https://fakestoreapi.com/products';
  const [products,setProducts]=useState([]);

  useEffect(()=>
  {
    // IIFE
      (async ()=>
      {
        const response = await axios.get(url);
        setProducts(response.data);

      })();
    
  },
  []
)


return (
  <Container>
      <Row>
        
  {products.map(product=> <ProductCard product={product} key={product.id}/>)}

  </Row>
  </Container>
)


}

export default Products;