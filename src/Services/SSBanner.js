import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import SSBackground from '../Images/HomeSS.jpg';

const Banner = props => {
  return (
    <BannerContainer>
      <StyledFigure>
        <StyledImg />
      </StyledFigure>
      <SSContainer>
        <h2> Storage Security </h2>
        <p>
            In addition to our release of information services, we also offer paper chart storage services to hospitals and clinics. 
            Is your hospital or clinic closing?  We can store your paper charts and handle your medical records requests after your facility closes.
            We have several storage warehouse locations across the United States, and will keep your facility compliant according to your state's 
            record retention policies.   
        </p>
        <Button as={AnchorTag} href="/form" onClick={props.showForm} animated="fade">
          <Button.Content visible> Contact Us </Button.Content>
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </SSContainer>

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
  background-image: url(${SSBackground});
  background-size: cover;
`;

const StyledFigure = styled.figure`
  margin: 0;
`;

const SSContainer = styled.div`
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
