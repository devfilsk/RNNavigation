import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import CustomerHead from '../CustmerHead';

// import { Container } from './styles';

export default Register = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
          <CustomerHead title="Register" navigation={navigation}/>
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Register Screen</Text>
            <Button onPress={() => navigation.navigate('HomeScreen')}>
              <Text>Register</Text>
            </Button>
          </View>
        </View>
    )
  }
