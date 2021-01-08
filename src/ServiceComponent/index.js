import React from "react";
import { Card, Grid, Button, Icon, Header } from "semantic-ui-react";
import styled from "styled-components";
import ROIBackground from '../Images/ROIThumbnail.jpg';
import SSBackground from '../Images/SSThumbnail.jpg';
import LDRBackground from '../Images/LDRThumbnail.jpg';
import {useMediaQuery} from 'react-responsive';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  return isMobile ? children : null
}




const GridDesktopBody = (props) => {
  return (
  <React.Fragment>
  <Grid.Column>
  <h3>Release of Information</h3>
  <StyledCardROI centered>
    <Card.Content>
      <Card.Meta />
    </Card.Content>
    <Button as={AnchorTag} href="/ReleaseOfInformation" onClick={props.showForm} animated="fade">
      <Button.Content visible> Go To Page </Button.Content>
      <Button.Content hidden>
        <Icon name="mail" />
      </Button.Content>
    </Button>
  </StyledCardROI>
</Grid.Column>
<Grid.Column>
<h3>Storage Services</h3>
  <StyledCardSS centered>
    <Card.Content>
      <Card.Meta />
    </Card.Content>
    <Button as={AnchorTag} href="StorageServices" onClick={props.showForm} animated="fade">
      <Button.Content visible> Go To Page </Button.Content>
      <Button.Content hidden>
        <Icon name="mail" />
      </Button.Content>
    </Button>
  </StyledCardSS>
</Grid.Column>
<Grid.Column>
<h3>Legal Document Retrieval</h3>
  <StyledCardLDR centered>
    <Card.Content>
      <Card.Meta />
    </Card.Content>
    <Button as={AnchorTag} href="/LegalDocumentRetrieval" onClick={props.showForm} animated="fade">
      <Button.Content visible> Go To Page </Button.Content>
      <Button.Content hidden>
        <Icon name="mail" />
      </Button.Content>
    </Button>
  </StyledCardLDR>
</Grid.Column>
</React.Fragment>
  );
}

const GridMobileBody = (props) => {
  return (
  <React.Fragment>
  <Grid.Column className="mobilecard">
  <h3>Release of Information</h3>
  <StyledCardROI centered >
    <Card.Content className="mobilecard">
      <Card.Meta />
    </Card.Content>
    <Button as={AnchorTag} href="/ReleaseOfInformation" onClick={props.showForm} animated="fade">
      <Button.Content visible> Go To Page </Button.Content>
      <Button.Content hidden>
        <Icon name="mail" />
      </Button.Content>
    </Button>
  </StyledCardROI>
</Grid.Column>
<Grid.Column className="mobilecard">
<h3>Storage Services</h3>
  <StyledCardSS centered>
    <Card.Content className="mobilecard">
      <Card.Meta />
    </Card.Content>
    <Button as={AnchorTag} href="StorageServices" onClick={props.showForm} animated="fade">
      <Button.Content visible> Go To Page </Button.Content>
      <Button.Content hidden>
        <Icon name="mail" />
      </Button.Content>
    </Button>
  </StyledCardSS>
</Grid.Column>
<Grid.Column className="mobilecard">
<h3>Legal Document Retrieval</h3>
  <StyledCardLDR centered>
    <Card.Content>
      <Card.Meta />
    </Card.Content>
    <Button as={AnchorTag} href="/LegalDocumentRetrieval" onClick={props.showForm} animated="fade">
      <Button.Content visible> Go To Page </Button.Content>
      <Button.Content hidden>
        <Icon name="mail" />
      </Button.Content>
    </Button>
  </StyledCardLDR>
</Grid.Column>
</React.Fragment>
  );
}

const ServicesContainer = (props) => {
  return (
    <React.Fragment>
    <Container>
      <OurServices as="h2">Our Services</OurServices>
      <Card.Group>
        <Desktop>
          <Grid columns="equal" style={StyledDesktopGrid}>
            <GridDesktopBody/>
          </Grid>
        </Desktop>
        <Mobile>
          <Grid columns="equal" style={StyledMobileGrid}>
            <GridMobileBody/>
          </Grid>
        </Mobile>
      </Card.Group>
    </Container>
    </React.Fragment>
  );
};

const AnchorTag = styled.a``;

const StyledDesktopGrid = {
  width: '100%',
  'flexFlow': 'row',
};

const StyledMobileGrid = {
  width: "100%",
  "flexDirection": "column",
  "alignItems" : "center",
};

const StyledCardROI = styled(Card)`
  &&& {
    width: 85%;
    padding: 5%;
    height: 42vh;
    background-image: url(${ROIBackground});
    background-size: cover;
  }
`;

const StyledCardSS = styled(Card)`
  &&& {
    width: 85%;
    padding: 5%;
    height: 42vh;
    background-image: url(${SSBackground});
    background-size: cover;
  }
`;

const StyledCardLDR = styled(Card)`
  &&& {
    width: 85%;
    padding: 5%;
    height: 42vh;
    background-image: url(${LDRBackground});
    background-size: cover;
  }
`;

const Container = styled.div`
  margin-bottom: 5%;
`;

const OurServices = styled(Header)`
  margin-bottom: 4%;
`;

export default ServicesContainer;
