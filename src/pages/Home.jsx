import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import CardSlider from "../components/CardSlider"
import CardItem from "../components/CardItem"

import { mobile } from "../responsive";
import "../css/Home.css";

const SubText = styled.div`
  margin: 10vh 0 0;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  letter-spacing: 0.1em;
  color: #0d3332;
  text-transform: uppercase;
  ${mobile({
    margin: '7% 0 0',
    fontSize: '4.5vh',
    lineHeight: 1.2
  })}
`;

const Home = (item, list) => {
  return (
    <>
      <Navbar/>
      <h1 className="home-h1"><strong className="home-strong">Gift Box</strong> Collection</h1>
      <CardSlider
        list={list}
        renderItem={CardItem}
        width={Math.min(window.innerWidth * 0.55, 280)}
        boxWidth={Math.min(window.innerWidth, 1000)}
        opacity={1}
        scale={0.85}
        disableNext={false}
        disablePrev={false}
        index={3}
        onChange={(index, data) => {
          console.log(index, data);
        }}
    />
      
      
      
      <SubText>White Angels</SubText>
    </>
  );
};

export default Home;
