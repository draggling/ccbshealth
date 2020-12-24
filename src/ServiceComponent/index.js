import React from "react";
import { Card, Grid, Button, Icon, Header } from "semantic-ui-react";
import styled from "styled-components";
import ROIBackground from '../Images/ROI.png';
import SSBackground from '../Images/database.jpg';
import LDRBackground from '../Images/legalfiles.jpg';


const ServicesContainer = (props) => {
  return (
    <Container>
      <OurServices as="h2">Our Services</OurServices>
      <Card.Group>
        <Grid columns="equal" style={StyledGrid}>
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
        </Grid>
      </Card.Group>
    </Container>
  );
};

const AnchorTag = styled.a``;

const StyledGrid = {
  width: "100%",
  "marginLeft": "0vh",
};

const StyledCardROI = styled(Card)`
  &&& {
    width: 85%;
    padding: 5%;
    height: 40vh;
    background-image: url(${ROIBackground});
    background-size: cover;
  }
`;

const StyledCardSS = styled(Card)`
  &&& {
    width: 85%;
    padding: 5%;
    height: 40vh;
    background-image: url(${SSBackground});
    background-size: cover;
  }
`;

const StyledCardLDR = styled(Card)`
  &&& {
    width: 85%;
    padding: 5%;
    height: 40vh;
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
