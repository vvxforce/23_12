import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Info = styled.div`
  opacity: 1;
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 5px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover .Image {
    transform: translateY(-10%);
  };
  
  
`;
/*&:hover ${Info}{
  opacity: 1;
};*/

/*const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;*/

const Image = styled.img`
padding-top: 10vh;
  height: 75%;
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  transition: all 0.3s ease;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  margin-top: 10vh;
  font-size: 24px;
  text-align: center;
  color: #0F4240;
`;

const ItemBox = styled.div`
margin-top: 10vh;
background: linear-gradient(148.83deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
border-radius: 20px;
`;

const BoxShadow = styled.div`

background: linear-gradient(148.83deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
box-shadow: inset 20px 20px 40px rgba(13, 51, 49, 0.1), inset 12px 12px 14px rgba(13, 51, 49, 0.25), inset -12px -12px 14px rgba(230, 255, 254, 0.4);
filter: drop-shadow(8px 8px 20px rgba(20, 77, 74, 0.2)) drop-shadow(-8px -8px 30px rgba(255, 255, 255, 0.5));
backdrop-filter: blur(20px);
border-radius: 20px;
`;




const Product = ({ item }) => {
  //console.log(item)
  return (
    <Container>
<ItemBox>
          <BoxShadow>
       <Link to={`/product/${item._id}`}>
      <Image className="Image" src={item.img} />
      <Title>{item.title}</Title>
           </Link>
      </BoxShadow>
      </ItemBox>
     
    </Container>
  );
};

/*
        <ItemBox>
          <BoxShadow>
       <Link to={`/product/${item._id}`}>
      <Image className="Image" src={item.img} />
      <Title>{item.title}</Title>
      </Link>
      </BoxShadow>
      </ItemBox>  */

export default Product;
