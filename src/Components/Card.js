import React from 'react';
import styled from 'styled-components';

const CardView = styled.div`
    border-radius: 12px;
    background-color: #ffffff;
    display: inline-block;
	width: 300px;
	margin: 1rem;
	font-size: 1rem;
	text-decoration: none;
	overflow: hidden;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: transform 0.1s ease-in-out, box-shadow 0.1s;
    &:hover{
        transform: translateY(-0.5rem) scale(1.0125);
	    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

`;

const Image =styled.img`
  position: relative;
  top: 20px;
  height: 200px;
  width: 200px;
  z-index: 10;
`;
const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 36px;
`;

const Subtext = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
`;

function Card(props) {
  return (
    <>
        <CardView>
            <Image src={props.Image} alt="Yoga Pose"/>
            <Title>{props.Title}</Title>
            <Subtext>{props.SubText}</Subtext>
        </CardView>
    </>
  )
}

export default Card;