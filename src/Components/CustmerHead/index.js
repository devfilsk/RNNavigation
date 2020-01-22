import React from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon, List, ListItem } from 'native-base';

// import { Container } from './styles';

export default CustomerHead = ({ title, isHome, navigation }) => {
    return (
      <Container>
          <Header>
            <Left>
              { isHome ? 
                <Button transparent onPress={() => navigation.openDrawer()}>
                  <Icon name='menu' />
                </Button>: 
                <Button transparent onPress={() => navigation.goBack()}>
                  <Icon name='arrow-back' />
                </Button>
              }
            
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            {/* <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right> */}
          </Header>
        </Container>
    );
  }
