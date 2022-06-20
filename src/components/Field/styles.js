import { StyleSheet } from 'react-native';

import { params } from '../../params';

export default StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },

  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333'
  },

  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },

  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },

  exploded: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
})