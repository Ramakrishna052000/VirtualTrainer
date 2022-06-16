import React, { useState } from 'react';
import WebCam from 'react-webcam';
import styled from 'styled-components';

import ExerciseCam from './ExerciseCam';
import {useLocation} from 'react-router-dom';

const MainContainer = styled.div`
  position: absolute; 
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: -5;
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
  top:90px;
  right:300px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 42px;
`; 

const CounterConatiner = styled.div`
  
  position: absolute;
  width:190px;
  height: 200px;
  top:90px;
  right:600px;
`;
const TextContainer = styled.div`

`;

const LeftText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 28px;
  display: inline;
  margin:20px;
`;

const RightText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 28px;
  display: inline;
  margin:20px;
`;

const LeftCounter = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin:20px;
  display: inline;
`;
const RightCounter = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin:20px;
  display: inline;
`;

const Web = styled.div`
  position: absolute;
  top:185px;
  left:120px;
`;

const Image = styled.img`
  position: absolute;
  top: 170px;
  right: 200px;
`;

function Exercise(props){
  const title = 'Lateral Raise';
  const imagesrc = '/static/media/LateralRaiseExercise.c10486fca4ae5f4a7621.gif';
  const [leftCount,setLeftCount] = useState(0);
  const [rightCount,setRightCount] = useState(0);

    return (
      <MainContainer>
        <Title>Practice</Title>
        <PoseTitle>{title}</PoseTitle>
        <CounterConatiner>
          <TextContainer>
            <LeftText>Left</LeftText>
            <RightText>Right</RightText>
          </TextContainer>
          <LeftCounter>{leftCount}</LeftCounter>
          <RightCounter>{rightCount}</RightCounter>
        </CounterConatiner>

        <Web>
          <ExerciseCam exercise={title} setLeftCount={setLeftCount} setRightCount={setRightCount}/>
        </Web>
        <Image src={imagesrc} alt="Exercise Gif"/>
      </MainContainer>
    )
}

export default Exercise;
