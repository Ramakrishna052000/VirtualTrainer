import React, { useState } from 'react';
import styled from 'styled-components';
import Mcam from './Mcam';

const MainContainer = styled.div`
  position: absolute; 
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #F1F5FD;
  z-index: -5;
`;
const Image = styled.img`
  position: absolute;
  top: 240px;
  right: 210px;
  height: 400px;
  width: 400px;
`;

const Title = styled.h1`
  position: absolute;
  top:40px;
  left:60px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 68px;
`;

const PoseTitle = styled.h1`
  position: absolute;
  top:150px;
  right:270px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 42px;
`; 

const TimeContainer = styled.div`
  position: absolute;
  width:270px;
  height: 200px;
  top:40px;
  right:600px;
`;

const Time = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 56px;
  margin:10px;
`;

const TimeText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin:10px;
`;


const Web = styled.div`
position: absolute;
top:185px;
left:120px;

`;

function Yoga(){
  const title = 'Pranamasana';
  const imagesrc = '/static/media/pranamasana-Salutation-pose.5f0517e91fb203a981bb.png';
  const [time,setTime] = useState("00:30");

    return (
      <MainContainer>
        <Title>Practice</Title>
        <PoseTitle>{title}</PoseTitle>
        <TimeContainer>
          <TimeText>seconds left to hold</TimeText>
          <Time>{time}</Time>
        </TimeContainer>
        <Web>
          <Mcam yoga = {title} setTime = {setTime}/>
        </Web>
        <Image src={imagesrc} alt="Yoga Avatar"/>
      </MainContainer>
    )
}

export default Yoga;
