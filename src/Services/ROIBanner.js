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
      <ROIContainer>
        <h2> Release of Information </h2>
        <p>
        Not only will we keep your facility fully HIPAA compliant, but we will also streamline 
        the entire ROI process to better serve both your patients and requestors. As well as 
        offering totally free of charge onsite, full services ROI – we also offer remote and 
        revenue share plans.  Ask us how we can save your facility labor and expenses by 
        handling your medical records requests remotely.
        </p>
        <Button as={AnchorTag} href="/form" onClick={props.showForm} animated="fade">
          <Button.Content visible> Contact Us </Button.Content>
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </ROIContainer>

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

const ROIContainer = styled.div`
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
