import React from 'react';
import { View, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { IMAGE } from './src/constants/image'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Register from './src/Components/auth/Register';
import Login from './src/Components/auth/Login';
import HomeScreen from './src/Components/HomeScreen';
import HomeDetail from './src/Components/HomeDetail';
import SearchScreen from './src/Components/SearchScreen';
import SearchDetail from './src/Components/SearchDetail';
import Profile from './src/Components/Profile';
import Setting from './src/Components/Setting';
import SideMenu from './src/Components/SideMenu'

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
},
{
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
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
},
{
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
  },
}
)

// const MainTabs = createMaterialTopTabNavigator ({
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
}, {
  // swipeEnable: true, // just work on top navigation
  // tabBarPosition: "bottom",
  // style: {height: 100,}
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

const authStack = createSwitchNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionsHandler
  },
  Register: {
    screen: Register,
    navigationOption: navOptionsHandler
  }
});

const MainApp = createSwitchNavigator(
  {
    app: appDrawer,
    auth: authStack
  },
  {
    initialRouteName: 'auth'
  }
)

const AppNavigator = createAppContainer(MainApp);

export default function App() {
  return (
    <AppNavigator />
  )
}