import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
