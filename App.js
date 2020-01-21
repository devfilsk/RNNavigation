import React from 'react';
import { View, Image, Settings, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon, List, ListItem } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { IMAGE } from './src/constants/image'
import { createDrawerNavigator } from 'react-navigation-drawer';

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
        <CustomerHead title="Detalhes" navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen Details</Text>
        </View>
      </View>
    );
}

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
      <CustomerHead title="Search" isHome={true} />
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SearchScreen</Text>
        <Button onPress={() => navigation.navigate('SearchDetail')}>
          <Text>Go to SearchScreen detail</Text>
        </Button>
      </View>
    </View>
  );
}

const SearchDetail = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead title="Settings Details" navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen Details</Text>
        </View>
      </View>
    );
}

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
      <CustomerHead title="Profile Details" navigation={navigation}/>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
}

const Setting = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
      <CustomerHead title="Settings Details" navigation={navigation}/>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    </View>
  );
}

const SideMenu = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={IMAGE.ICON_USER}
          style={{ height: 120, width: 120, borderRadius: 60 }}
          />
      </View>
      <ScrollView>
        <List>
          <ListItem>
            <Text>Settings</Text>
          </ListItem>
          <ListItem>
            <Text>Profile</Text>
          </ListItem>
        </List>
      </ScrollView>

      <List>
          <ListItem noBorder>
            <Text>Logout</Text>
          </ListItem>
        </List>
    </SafeAreaView>
  )
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
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: navOptionsHandler
  },
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: navOptionsHandler
  }
})

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image 
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{ width: 20, height: 20}}
        />
      )
    }
  },
  Search: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Image 
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{ width: 20, height: 20}}
        />
      )
    }
  }
});

const MainStack = createStackNavigator({
  Home: {
     screen: MainTabs,
     navigationOptions: navOptionsHandler
  },
  Setting: {
    screen: Setting,
    navigationOptions: navOptionsHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionsHandler
  }
}, {initialRouteName: 'Home'});

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  }, 
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 3/4
  }
)

export default createAppContainer(appDrawer);