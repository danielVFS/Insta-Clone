import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          name: 'Lucas Silva',
          description: 'Mais um dia de muitos bugs :)',
          imgProfile:
            'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublication: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '2',
          name: 'Matheus',
          description: 'Isso sim é ser raiz!!!!!',
          imgProfile:
            'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublication: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0,
        },
        {
          id: '3',
          name: 'Jose Augusto',
          description: 'Bora trabalhar Haha',
          imgProfile:
            'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublication: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3,
        },
        {
          id: '4',
          name: 'Gustavo Henrique',
          description: 'Isso sim que é TI!',
          imgProfile:
            'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublication: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1,
        },
        {
          id: '5',
          name: 'Guilherme',
          description: 'Boa tarde galera do insta...',
          imgProfile:
            'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublication: 'https://sujeitoprogramador.com/instareact/foto5.png',
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
              source={require('../../../assets/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 30,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 8,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});
