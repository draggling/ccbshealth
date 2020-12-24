import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from "styled-components";

const NavBar = (props) => {


    return (
      <NavContainer>
      <UlTag>
      <LiTag><LogoImg alt="logo" src='https://ccbs-logo.s3.us-east-2.amazonaws.com/ccbs-logo/222.jpg' /></LiTag>
      <LiTag> <Icon name='home'/> <H5pContainer>
               <a href="/">
                  <h5>Home</h5>
               </a>
            </H5pContainer> </LiTag>
      <LiTag><Icon name='briefcase' /><H5pContainer><h5>Services</h5>
         <PTag><a href="/ReleaseOfInformation">Release of Information</a></PTag>
         <PTag><a href="/StorageServices">Storage Services</a></PTag>
         <PTag><a href="/LegalDocumentRetrieval">Legal Document Retrieval</a></PTag>
         </H5pContainer></LiTag>
      <LiTag><Icon name='clock outline' /><H5pContainer><h5>business hours</h5><PTag>Mon-Fri 9am-5pm</PTag></H5pContainer></LiTag>
      <LiTag><Icon name='phone' /><H5pContainer><h5>phone</h5>
         <PTag>(954) 299-5071 Direct</PTag>
         <PTag>(800) 506-1688 Fax</PTag>
         </H5pContainer></LiTag>
      <LiTag><Icon name='home' /><H5pContainer><h5>address</h5>
         <PTag>300 E Oakland Park Blvd.</PTag>
         <PTag>Fort Lauderdale, Florida 33334</PTag>
         </H5pContainer></LiTag>
      </UlTag>
    </NavContainer>

    /* header */
      
    )

}

const H5pContainer = styled.div`
   margin-left: 5%;
   width: 15em;
`;

const PTag = styled.p`
   height: 10%;
   font-size: 12px;
   color: #505050;
`;

const UlTag = styled.ul`
   background-color: white;
   margin: 0;
   padding-top: 2%;
   padding-bottom: 1%;
   list-style-type: none;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: end;
`;

const LiTag = styled.li`
display: flex;
flex-direction: row;
text-align: left;
border-right: 1px solid #A8A8A8;

`;


const NavContainer = styled.div`

`;

const LogoImg = styled.img`
   height: 10vh;
`;

export default NavBar;
