import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Card,Button,ProgressBar } from "react-bootstrap";


function Main (){

return(
    <Container>
    
    <Navbar />
    <SubContainer>
        <SectionOne>
            <ColumnOne1>
            <div>
  <ProgressBar variant="success" now={40} />
  <ProgressBar variant="info" now={20} />
  <ProgressBar variant="warning" now={60} />
  <ProgressBar variant="danger" now={80} />
</div>
            </ColumnOne1>
            <ColumnTwo1></ColumnTwo1>
        </SectionOne>
        <SectionTwo>
            <ColumnOne2>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 </ColumnOne2>
            <ColumnTwo2>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></ColumnTwo2>
        </SectionTwo>
    </SubContainer>

    </Container>
    
    );

}

const Container=styled.div`
width:80%;
background:linear-gradient(to bottom right,white 0%right,#e6e4ff 70%);
border-bottom-right-radius: 2rem;
border-top-right-radius: 2rem;
margin:1rem 8rem 1rem 4rem;
`
const SubContainer=styled.div`
margin:0.5rem
height:80%;
width:100%;
display:flex;
flex-directtion:column;
gap:4rem;

`
const TitleText=styled.div`
height:20%;
`
const SectionOne=styled.div`
display:flex;
justift-content:space-between;
height:40%;
gap:2rem;
width:100%
`
const SectionTwo=styled.div`
display:flex;
gap:2rem;
height:26vh;
`

const ColumnOne1=styled.div`
display:flex;
gap:3rem;   
`
const ColumnOne2=styled.div``
const ColumnTwo1=styled.div`
display:flex;
flex-direction:column;
height:115%;
width:100%;
`
const ColumnTwo2=styled.div``
export default Main;