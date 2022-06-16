import React from 'react'
import styled from 'styled-components';
import Card from './Card';

import ExercisePose1 from '../Assets/BicepCurlsExercise.gif';
import ExercisePose2 from '../Assets/LateralRaiseExercise.gif';
import ExercisePose3 from '../Assets/ChestFlyExercise.gif';
import { useNavigate} from "react-router-dom";

const MainContainer = styled.div`
  position: absolute; 
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #F1F5FD;
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

const CardWrapper = styled.div`
  position: absolute;
  left: 150px;
  top: 200px;
  display: flex;
`;



function ExerciseList() {



        // history.push({
        //   pathname: "/exercise",
        //   state:
        // });
        const history = useNavigate();

        const toExercise1=()=>{
          history('/exercise1');
        }

        const toExercise2=()=>{
          history('/exercise2');
        }

        const toExercise3=()=>{
          history('/exercise3');
        }
  return (
    <MainContainer>
        <Title>Exercise</Title>
        <CardWrapper>
            <div onClick={toExercise1}>
              <Card 
                  Image={ExercisePose1}
                  Title="Bicep Curls"
                  SubText=""
              />
            </div>
            <div onClick={toExercise2}>
              <Card
                  Image={ExercisePose2}
                  Title="Lateral Raise"
                  SubText=""
              />
            </div>
            <div onClick={toExercise3}>
              <Card
                  Image={ExercisePose3}
                  Title="Chest Fly"
                  SubText=""
              />
            </div>
        </CardWrapper>
    </MainContainer>
  )
}

export default ExerciseList;