import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from "styled-components" 


const Footer = () => {


    return (
    <div className="footer">
    <UlTag>
    <LiTag><Icon name='clock outline' /><H5pContainer><h5>business hours</h5><PTag>Mon-Fri 9am-5pm</PTag></H5pContainer></LiTag>
            <LiTag><Icon name='phone' /><H5pContainer><h5>phone</h5>
               <PTag>(954) 299-5071 Direct</PTag>
               <PTag>(800) 506-1688 Fax</PTag>
            </H5pContainer></LiTag>
            <LiTag><Icon name='home' /><H5pContainer><h5>address</h5>
               <PTag>300 E Oakland Park Blvd.</PTag>
               <PTag>Fort Lauderdale, Florida 33334</PTag>
            </H5pContainer></LiTag>
            <LiTag> <Icon name="copyright outline"/> 2020 CCBS Inc </LiTag>
    </UlTag>
    </div>
    )

}

const H5pContainer = styled.div`
   margin-left: 5%;
   /*width: 15em;*/
   width: 100%;
`;

const PTag = styled.p`
   height: 10%;
   width: fit;
   font-size: 14px;
   color: white;
`;

const UlTag = styled.ul`
   background-color: grey;
   margin: 0;
   padding-right: 2%;
   padding-bottom: 1%;
   flex-direction: row;
   display: flex;
   justify-content: space-around;
   align-items: flex-start;
`;

const LiTag = styled.li`
color: white;
display: -webkit-box;
flex-direction: row;
text-align: left;

`;
export default Footer;
