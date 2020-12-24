import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import AboutUsBackground from '../Images/temp.jpg';

const Banner = props => {
  return (
    <BannerContainer>
      <StyledFigure>
        <StyledImg />
      </StyledFigure>
      <LDRContainer>
        <h2> Legal Document Retrieval </h2>
        <p>
            Law firms and Insurance companies - let us streamline your medical records process and handle the entire process from start to finish. 
            With no minimum amount of requests per month required, we offer a low flat fee of 30.00 per set of records retrieved.  
            We can assist single attorney law firms to large insurance companies needing 1000's of sets of records for quality or HEDIS reviews. 
            You simply forward the patient signed authorization to us, and we will handle the entire process.
            We type up the request letters and submit them to the providers directly. We follow up on all requests every 48 hours.
            We pay for invoices up front and bill your entity monthly for the cost of the medical records/bills plus the $30.00 service fee
            We provide you with a secure portal where you can access request statuses and finalized PDF files of the requested records     
        </p>
        <Button as={AnchorTag} href="/form" onClick={props.showForm} animated="fade">
          <Button.Content visible> Contact Us </Button.Content>
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </LDRContainer>

    </BannerContainer>
  );
};


const AnchorTag = styled.a``;

const BannerContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row-reverse; */
  width: 100%;
  /* margin-bottom: 5%; */
`;

const StyledImg = styled.img`
  height: 80vh;
  display: block;
  margin: auto;
  max-width: 100%;
  width: 100%;
  background-image: url(${AboutUsBackground});
  background-size: cover;
`;

const StyledFigure = styled.figure`
  margin: 0;
`;

const LDRContainer = styled.div`
    background-color: white;
    position: absolute;
    top: 30%;
    left: 20%;
    padding: 2% 3%;
    width: 60%;
    border-radius: 3%;
  /* -webkit-transform: translate(-50%,-50%);
-ms-transform: translate(-50%,-50%);
transform: translate(-50%,-50%); */
/*
  padding: 2% 5%;
  width: 600px;
  border-radius: 3%;
*/
`;

export default Banner;
