import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import FormOrder from './FormOrder';

const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <FormOrder id={product._id} img={product.img}/>
    </Container>
  );
};

export default Product;
