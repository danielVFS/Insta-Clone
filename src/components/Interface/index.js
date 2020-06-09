import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
export default class Interface extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HEllo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
