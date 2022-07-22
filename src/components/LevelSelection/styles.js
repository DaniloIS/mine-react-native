import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },

  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  button: {
    marginTop: 10,
    padding: 5
  },

  btnLabel: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold'
  },

  btnEasy: {
    backgroundColor: '#49b65d'
  },

  btnNormal: {
    backgroundColor: '#2765f7'
  },

  btnHard: {
    backgroundColor: '#f26337'
  }
})