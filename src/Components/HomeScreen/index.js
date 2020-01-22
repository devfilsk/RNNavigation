import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import CustomerHead from '../CustmerHead';

// import { Container } from './styles';

export default HomeScreen = ({ navigation }) => {
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
