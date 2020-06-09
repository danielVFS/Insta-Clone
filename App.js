import React from 'react';
import { View } from 'react-native';

import Feed from './src/components/Feed';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Feed />
      </View>
    );
  }
}
