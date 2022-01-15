import React from 'react'
import styled from 'styled-components'
import { darkThemeColor } from '../utils'
import Badge from './badge'
import AvatarImage from "../assests/hello.jpeg";
import  {RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import  { FaWallet } from "react-icons/fa";
import  { AiOutlinePieChart } from "react-icons/ai";
import Stopwatch from './timer';
 
function Sidebar ()  {
    return (
          <Container>
              <ProfileContainer>
                  <Avatar src={AvatarImage} />
                  <Name>Jagdeep singh</Name>
                  {/* < Badge content="Admin 1" /> */}
                  < Stopwatch/>
              </ProfileContainer>
              <LinksContainer>
              <Links>
              <Link>
              <RiHomeLine />
              <h3>Dashboard</h3>
              </Link>
              <Link>
              <RiFileCopyLine />
              <h3>Project</h3>
              </Link>
              <Link>
              <FaWallet />
              <h3>Invoices</h3>
              </Link>
              <Link>
              <AiOutlinePieChart />
              <h3>Reports</h3>
              </Link>
           </Links>
              <ContactContainer>
                  <span>Having Troubles?</span>
                  <a href='#'>Contact us</a>
              </ContactContainer>
              
              </LinksContainer>
          </Container> 
    );
}

const Container = styled.div`
width:20%;
height:100% !important;
border-radius: 2rem;
background-color:#091322;
display:flex;
flex-direction:column;
align-items:center;
gap:3rem;


`
const ProfileContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Avatar = styled.img`
height:7rem;
border-radius:6rem;
margin-top:20%;
`
const Name = styled.h1`
color:white;
font:1.5rem;
font-weight:200;
margin:0.8rem 0 0.5rem 0;
`
const LinksContainer= styled.div`
background-color:${darkThemeColor};
height:100%;
width:100%;
border-radius:2rem;

`
const Links= styled.div`
list-style-type:none;
display:flex;
flex-direction:column;
padding-top:2rem;
height:60%;

`
const Link= styled.div`
margin-left:25%;
margin-bottom:2rem;
display:flex;
gap:1rem;
color:#e4e4e4;
cursor:pointer;
h3{
    font-weight:300;

}
svg{
    font-size:1.1rem;
        margin-top:3%
}

`
const ContactContainer= styled.div`
width:60%;
background-color:#091322;
color:#c4c4c4;
height:15%;
margin: auto auto;
border-radius:1rem;
display:flex;
flex-direction:column;
padding:1rem;
a{
    color:white;
    text-decoration:none;
}
`
const SubContainer=styled.div`

`

export default Sidebar;
