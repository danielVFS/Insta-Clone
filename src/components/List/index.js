import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
  }

  render() {
    return (
      <View style={styles.feedArea}>
        <View style={styles.perfilArea}>
          <Image
            source={{ uri: this.state.feed.profileImg }}
            style={styles.perfilImg}
          />

          <Text style={styles.userName}>{this.state.feed.name}</Text>
        </View>

        <Image
          resizeMode="cover"
          source={{ uri: this.state.feed.publicationImg }}
          style={styles.feedImg}
        />

        <View style={styles.interactionArea}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/like.png')}
              style={styles.interactionIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../../assets/send.png')}
              style={styles.interactionIcons}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.postInfo}>
          <Text style={styles.postUsername}>{this.state.feed.name}</Text>
          <Text style={styles.postDescription}>
            {this.state.feed.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedArea: {
    flex: 1,
    marginBottom: 10,
  },
  perfilArea: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  perfilImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 5,
  },
  feedImg: {
    flex: 1,
    height: 300,
    alignItems: 'center',
  },
  interactionArea: {
    flexDirection: 'row',
    padding: 5,
  },
  btnSend: {
    paddingLeft: 10,
  },
  interactionIcons: {
    width: 33,
    height: 33,
  },
  postInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUsername: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  postDescription: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#222',
  },
});
