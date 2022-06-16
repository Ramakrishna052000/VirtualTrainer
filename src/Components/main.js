import React, { useState } from 'react';
import DashBoard_Navbar from "./DashBoard_Navbar";
import DashBoard_Header from "./DashBoard_Header";
import DashBoard_Yoga from './DashBoard_Yoga';
import DashBoard_Exercise from './DashBoard_Exercise';
import DashBoard_HealthTips from './Dashboard_HealthTips';

const DashBoard = () => {
  return (
    <>
    <DashBoard_Navbar/>
    <DashBoard_Header/>
    <DashBoard_Yoga/>
    <DashBoard_Exercise/>
    <DashBoard_HealthTips/> 
    </>
  )
}

export default DashBoard;