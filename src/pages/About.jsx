import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import box2 from '../img/box2.png';

const Container = styled.div`
  min-height: 100vh;
`;


const Text = styled.div`
padding: 10vh 5vw;
 display:flex;
 justify-content: left;
 font-size: 16px;
`;

const SubText = styled.div`
 margin-top: 8vw;
 display:flex;
 justify-content: center;
 font-size: 48px;
`;

const About = () => {
  return (
    <Container>
      <Navbar/>
      <Text>Here will be information about White Angels</Text>
      <Text><img src={box2}/></Text>
      </Container>
  );
};

export default About;