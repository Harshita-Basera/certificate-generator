
import Navbar from "./Component/NavBar/index"
import './App.css';
import SideBar from './Component/SideBar/index';

import { useState } from 'react';



function App() {

  
  return (
    <main>
      <Navbar/>
      <SideBar headColor={headColor} setHeadColor={setHeadColor} bg={bg} setBg={setBg} 
      fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} 
      setFontColor={setFontColor} fontColor={fontColor} fontSize={fontSize} setFontSize={setFontSize} 
      content={content} courseName={courseName} setCourseName={setCourseName} provider={provider} 
      setProvider={setProvider}   setName={setName} name={name} borders={backgrounds} setBorder={setBorder} 
       setContent={setContent} setForWhat={setForWhat}/>
       
      
    </main>
  );
}

export default App;