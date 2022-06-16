import React from 'react'
import styled from 'styled-components';
import Card from './Card';

import yogaPose1 from '../Assets/pranamasana-Salutation-pose.png';
import yogaPose2 from '../Assets/Virabhadrasana-Warrior-pose.png';
import yogaPose3 from '../Assets/vrikshasana-Tree_Pose.png';
import { useNavigate } from "react-router-dom";

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



function YogaList() {

  const history = useNavigate();

  const toYoga1=()=>{
    history('/yoga1',{title:'Pranamasana',image:'/static/media/pranamasana-Salutation-pose.05617b3dbac378a67293.png'});
  }

  const toYoga2=()=>{
    history('/yoga2',{title:'Anjaneyasana',image:'/static/media/Anjaneyasana-crescent%20moon%20pose.0ab88b7850541ed353dd.png'});
  }

  const toYoga3=()=>{
    history('/yoga3',{title:'Vrikshasana',image:'/static/media/vrikshasana-Tree-Pose.93f763719223ede0be67.png'});
  }
  return (
    <MainContainer>
        <Title>Yoga</Title>
        <CardWrapper>
            <div onClick={toYoga1}>
              <Card 
                  Image={yogaPose1}
                  Title="Pranamasana"
                  SubText="Salutation Pose"
              />
            </div>
            <div onClick={toYoga2}>
              <Card
                  Image={yogaPose2}
                  Title="Virabhadrasana"
                  SubText="Warrior Pose"
              />
            </div>
            <div onClick={toYoga3}>
              <Card
                  Image={yogaPose3}
                  Title="Vrikshasana"
                  SubText="Tree Pose"
              />
            </div>
        </CardWrapper>
    </MainContainer>
  )
}

export default YogaList;