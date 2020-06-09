import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };

    this.loadIcon = this.loadIcon.bind(this);
    this.seeLikes = this.seeLikes.bind(this);
    this.like = this.like.bind(this);
  }

  loadIcon(likeada) {
    return likeada
      ? require('../../assets/likeada.png')
      : require('../../assets/like.png');
  }

  like() {
    const { feed } = this.state;

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        },
      });
    }
  }

  seeLikes() {
    const { feed } = this.state;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likesText}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
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
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.loadIcon(this.state.feed.likeada)}
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

        {this.seeLikes(this.state.feed.likers)}

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
  likesText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
