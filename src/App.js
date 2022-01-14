import React from 'react';
import './App.css';
import styled from "styled-components";
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Main from './components/main';



function App() {
  return <Container>  
 <Sidebar />
 <Main /> 
  </Container>
}

const Container= styled.div`
display:flex;
height:97vh;
background: linear-gradient( to bottom right, white 0%, #e6e4ff 70%);
border-radius: 2rem;


`
export default App;
