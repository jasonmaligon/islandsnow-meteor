import React from 'react';
import { Container, Grid, GridColumn, List, Button, Input } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (
        <footer className="grey-background">
          <Container>
            <Grid centered columns="3">
              <GridColumn>
                <List>
                  NAVIGATION
                  <hr/>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </GridColumn>

              <GridColumn>
                <List>
                  MAIN MENU
                  <hr/>
                  <List.Item>Mens</List.Item>
                  <List.Item>Womens</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </GridColumn>

              <GridColumn>
                <List>
                  CONNECT
                  <hr/>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <List.Item>
                    <Input placeholder="Enter Email Address">
                    </Input>
                    <Button color="black">
                      Join
                    </Button>
                  </List.Item>
                </List>
              </GridColumn>
            </Grid>
          </Container>
        </footer>
    );
  }
}
