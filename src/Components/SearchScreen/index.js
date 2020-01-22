import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import CustomerHead from '../CustmerHead';

export default SearchScreen = ({ navigation }) => {
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
