import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';

const CustomerHead = ({ title, isHome, navigation }) => {
  return (
    <Container>
        <Header>
          <Left>
            { isHome ? 
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>: 
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>}
           
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
  );
}

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead title="Home" isHome={true} navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen</Text>
          <Button onPress={() => navigation.navigate('HomeDetail')}>
            <Text>Go to Home detail</Text>
          </Button>
        </View>
      </View>
    );
}

const HomeDetail = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead title="Detalhes" isHome={false} navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen Details</Text>
        </View>
      </View>
    );
}

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
      <CustomerHead />
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SettingsScreen</Text>
        <Button onPress={() => navigation.navigate('SettingsDetail')}>
          <Text>Go to SettingsScreen detail</Text>
        </Button>
      </View>
    </View>
  );
}

class SettingsDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead />
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen Details</Text>
        </View>
      </View>
    );
  }
}

const navOptionsHandler = ({navigation}) => ({
  header: null, 
});

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: navOptionsHandler,
    headerShown: false
  },
  HomeDetail: {
    screen: HomeDetail,
    navigationOptions: navOptionsHandler,
    headerShown: false
  }
})

const SettingsStack = createStackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: navOptionsHandler
  },
  SettingsDetail: {
    screen: SettingsDetail,
    navigationOptions: navOptionsHandler
  }
})

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
});

export default createAppContainer(TabNavigator);