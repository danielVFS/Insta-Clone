import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import List from './src/components/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          name: 'Lucas Silva',
          description: 'Mais um dia de muitos bugs :)',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          publicationImg: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 1,
        },
        {
          id: '2',
          name: 'Matheus',
          description: 'Isso sim é ser raiz!!!!!',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          publicationImg: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: true,
          likers: 2,
        },
        {
          id: '3',
          name: 'Jose Augusto',
          description: 'Bora trabalhar Haha',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          publicationImg: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3,
        },
        {
          id: '4',
          name: 'Gustavo Henrique',
          description: 'Isso sim que é TI!',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          publicationImg: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '5',
          name: 'Guilherme',
          description: 'Boa tarde galera do insta...',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          publicationImg: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/assets/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./src/assets/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({ item }) => <List data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 65,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 25,

    borderBottomWidth: 0.2,
    shadowColor: '#222',
    elevation: 10,
  },
  logo: {},
  send: {
    height: 23,
    width: 23,
  },
});
