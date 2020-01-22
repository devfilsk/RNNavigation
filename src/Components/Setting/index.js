import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import CustomerHead from '../CustmerHead';
// import { Container } from './styles';

export default Setting = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead title="Settings Details" navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings Screen</Text>
        </View>
      </View>
    );
  }
