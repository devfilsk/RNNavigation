import React from 'react';
import { Text, List, ListItem } from 'native-base';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { IMAGE } from '../../constants/image'

// import { Container } from './styles';

export default SideMenu = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={IMAGE.ICON_USER}
            style={{ height: 120, width: 120, borderRadius: 60 }}
            />
        </View>
        <ScrollView>
          <List>
            <ListItem onPress={() => navigation.navigate('Setting')}>
              <Text>Settings</Text>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('Profile')}>
              <Text>Profile</Text>
            </ListItem>
          </List>
        </ScrollView>
  
        <List>
            <ListItem noBorder onPress={() => navigation.navigate('auth')}>
              <Text>Logout</Text>
            </ListItem>
          </List>
      </SafeAreaView>
    )
  }