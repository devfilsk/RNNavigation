import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

// import { Container } from './styles';

export default Login = ({ navigation }) => {
    return (
      <View style={{ flex: 1}}>
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Screen</Text>
            <Button onPress={() => navigation.navigate('app')}>
              <Text>Login</Text>
            </Button>
            <Button onPress={() => navigation.navigate('Register')}>
              <Text>Register</Text>
            </Button>
          </View>
        </View>
    )
  }
