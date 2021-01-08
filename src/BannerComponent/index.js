import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import AboutUsBackground from '../Images/CarouselHome.jpg';
import ROIBackground from '../Images/CarouselROI.jpg';
import SSBackground from '../Images/CarouselSS.jpg';
import LDRBackground from '../Images/CarouselLDR.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const CarouselBody = (props) => {
  return (
      <Carousel dynamicWidth dynamicHeight infiniteLoop showThumbs={false} showStatus={false} >
            <div>
              <img className="carouselimage" src={AboutUsBackground} alt="carousel home image"/>
              <p className="legend">Care Consultants Better Solutions, Inc.</p>
          </div>
          <div>
              <img className="carouselimage" src={ROIBackground} alt="carousel ROI image"/>
              <p className="legend">Release of Information</p>
          </div>
          <div>
              <img className="carouselimage" src={SSBackground} alt="carousel SS image"/>
              <p className="legend">Security Services</p>
          </div>
          <div>
              <img className="carouselimage" src={LDRBackground} alt="carousel LDR image"/>
              <p className="legend">Legal Documents Retrieval</p>
          </div>
      </Carousel>
  );
}

/*
const Banner = props => {
  return (
    <BannerContainer>
      <StyledFigure>
        <StyledImg />
      </StyledFigure>
      <CarouselBody/>
      <AboutUsContainer>
        <h2> Care Consultants Better Solutions, Inc. </h2>
        <p>
          Care Consultants Better Solutions, Inc. offers release of information services nationwide.
            We cater our services to meet your direct needs,
            and always process any and all of your requests at <strong>NO COST</strong> – to include your non-billable medical records requests.
            We have been in business since 2002, and pride ourselves on the motto of "Patient Care Focused Release of Information Services."
        </p>
        <Button as={AnchorTag} href="/form" onClick={props.showForm} animated="fade">
          <Button.Content visible> Contact Us </Button.Content>
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </AboutUsContainer>

    </BannerContainer>
  );
};
*/

const AboutUs = props => {
  return (
  <AboutUsContainer>
  <h2> Care Consultants Better Solutions, Inc. </h2>
  <p>
    Care Consultants Better Solutions, Inc. offers release of information services nationwide.
      We cater our services to meet your direct needs,
      and always process any and all of your requests at <strong>NO COST</strong> – to include your non-billable medical records requests.
      We have been in business since 2002, and pride ourselves on the motto of "Patient Care Focused Release of Information Services."
  </p>
  </AboutUsContainer>
  );
}

const Banner = props => {
  return (
      <React.Fragment>
        <CarouselBody/>
        <AboutUs/>
      </React.Fragment>
  );
};

const AnchorTag = styled.a``;

const BannerContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row-reverse; */
  width: 90%;
  height: 85vh;
  /* margin-bottom: 5%; */
`;

const StyledFigure = styled.figure`
  margin: 0;
`;

const AboutUsContainer = styled.div`
    top: 30%;
    left: 20%;
    width: 80%
    justify-content: center;
    padding: 5% 6%;
    border-radius: 3%;
    background: ghostwhite;
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
