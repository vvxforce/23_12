import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product"
import { popularProducts } from "../data";
import axios from "axios";
import CardSlider from "./CardSlider";
import CardItem from "./CardItem"


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CarouselItem = styled.div`
  width:80px;
  height:80px;
`;


const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  /*console.log(products.map((item) => item.img))*/
  

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

 
//console.log(products)
/*console.log(products.slice(0,1).map((item) => item._id))*/
/*console.log(products.map((item) => item))*/
for (const [index, element] of products.entries())
  console.log(index);

  return (
    <Container>
       
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product className="CarouselItem" item={item} key={item.id}
             />)}
    </Container>
  );
};

/*<CardSlider
      products= {console.log(products)}
      renderItem={CardItem}
      width={280}
      boxWidth={1000}
      opacity={1}
      scale={0.85}
      disableNext={false}
      disablePrev={false}
      index={3}
      onChange={(index, data) => {
        console.log(index, data);
      }}
    />*/

export default Products;
