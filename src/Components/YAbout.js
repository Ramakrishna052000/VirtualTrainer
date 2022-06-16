import React, { Component } from "react";
import styled from "styled-components";
import yogaAvatar from "../Assets/yoga.png";
import { Link } from "react-router-dom";
import WebCam from "react-webcam";

var light_color = "#fff0f0";
var color = "#ffe9e9";
var dark_color = "#f9c4d2";
var color_border = "#b18597";
var color_shadow = "#ffe3e2";

const MainContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #fef3f6;
  z-index: -5;
`;

const Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 500px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 80px;
`;

const Subtext = styled.h2`
  position: absolute;
  top: 30%;
  left: 250px;
  right: 250px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 45px;
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: -50px;
  right:280px;
  z-index: -1;
  border-radius: 50%;
  background-color: #fbd6e0;
  box-shadow: 0px 0px 0px 120px #fbdce4, 0px 0px 0px 300px #fde7ed, 0px 0px 0px 440px #fef3f6;
  width: 800px;
  height:800px;
  margin: 3em;
`;


class Home extends Component {
  render() {
    return (
      <>
        <MainContainer>
          <Title>Virtual Trainer</Title>
          <Subtext>
            We are here to provide you a seamless and a dedicated trainer to you
            available in just a click. This will ensure that you no longer feel
            the absence of a trainer while you exercise at your place whenever
            you want to.
          </Subtext>
          <BackgroundImg />
        </MainContainer>
      </>
    );
  }
}

export default Home;