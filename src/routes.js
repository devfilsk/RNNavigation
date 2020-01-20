import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Views/Home';
import SettingsScreen from './Views/Settings';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
  });
  
export default createAppContainer(TabNavigator);