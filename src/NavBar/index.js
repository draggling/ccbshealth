import React from 'react'
import {Dropdown, Header } from 'semantic-ui-react'
import styled from "styled-components";
import {useMediaQuery} from 'react-responsive';
import { Link } from 'react-router-dom';

const Desktop = ({ children }) => {
   const isDesktop = useMediaQuery({ minWidth: 1025 })
   return isDesktop ? children : null
 }
 const Mobile = ({ children }) => {
   const isMobile = useMediaQuery({ maxWidth: 1024 })
   return isMobile ? children : null
 }

 const options = [
    {
      key: 'home',
      content: 'Home',
      as: Link, to: './'
    },
   {
     key: 'RoI',
     content: 'Release of Information',
     as: Link, to: './ReleaseOfInformation'
   },
   {
     key: 'SS',
     content: 'Storage Services',
     as: Link, to: './StorageServices'
   },
   {
     key: 'LDR',
     content: 'Legal Document Retrieval',
     as: Link, to: './LegalDocumentRetrieval'
   },
 ]
 

const NavBar = (props) => {

    return (
      <NavContainer>
         <Desktop>
            <UlTag>
            <LiTag><LogoImg alt="logo" src='https://ccbs-logo.s3.us-east-2.amazonaws.com/ccbs-logo/222.jpg' /></LiTag>
            <LiTag> <H5pContainer>
               <a href="/">
                  <h5>HOME</h5>
               </a>
            </H5pContainer> </LiTag>
            <LiTag><H5pContainer>
               <a href="/ReleaseOfInformation">
                  <h5>RELEASE OF INFORMATION </h5> 
               </a>
            </H5pContainer> </LiTag>
            <LiTag><H5pContainer>
               <a href="/StorageServices">
                  <h5>STORAGE SERVICES</h5>
               </a>
            </H5pContainer> </LiTag>
            <LiTag> <H5pContainer>
               <a href="/LegalDocumentRetrieval">
                  <h5>LEGAL DOCUMENT RETRIEVAL</h5>
               </a>
            </H5pContainer> </LiTag>
            </UlTag>
         </Desktop>
         <Mobile>
            <UlTag className = 'UlBurger'>
            <Header as='h4'>
               <Header.Content>
               <Dropdown className = "burger"
                  icon='bars'
                  options={options}
                  floating
                  compact
               />
               </Header.Content>
               </Header>
            </UlTag>
         </Mobile>
      </NavContainer>

    /* header */
      
    )

}

const H5pContainer = styled.div`
   margin-left: 5%;
   /*width: 15em;*/
   width: 100%;
`;

const UlTag = styled.ul`
   background-color: white;
   margin: 0;
   padding-top: 1.5%;
   padding-right: 40%;
   padding-bottom: 1%;
   display: flex;
   justify-content: space-around;
   align-items: flex-start;
`;

const LiTag = styled.li`
color: white;
display: -webkit-box;
flex-direction: row;
align-self: center;
`;


const NavContainer = styled.div`

`;

const LogoImg = styled.img`
   height: 10vh;
`;

export default NavBar;
