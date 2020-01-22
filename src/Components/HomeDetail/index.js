import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import CustomerHead from '../CustmerHead';
// import { Container } from './styles';

export default HomeDetail = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
        <CustomerHead title="Detalhes" navigation={navigation}/>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen Details</Text>
        </View>
      </View>
    );
}

