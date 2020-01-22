import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import CustomerHead from '../CustmerHead';
// import { Container } from './styles';

export default Profile = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead title="Profile Details" navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
        </View>
      </View>
    );
  }
