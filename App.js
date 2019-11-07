import React, {Component} from 'react';
import {Text, View} from 'react-native';
import codePush from 'react-native-code-push';
export class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 50}}> TEST </Text>
      </View>
    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
