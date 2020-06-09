import React from 'react';
import { View } from 'react-native';

import Interface from './src/components/Interface';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Interface />
      </View>
    );
  }
}
