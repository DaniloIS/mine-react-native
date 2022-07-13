import React from 'react';
import { View } from 'react-native';

import { Field } from '../Field';

import styles from './styles';

const MineField = ({ board }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />
    })
    return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
  })
  return (
    <View style={styles.container}>
      {rows}
    </View>
  )
}

export { MineField };