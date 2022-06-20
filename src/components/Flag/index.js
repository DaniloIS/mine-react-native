import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Flag = ({ bigger = false }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flagpole, bigger && styles.flagpoleBigger]} />
      <View style={[styles.flag, bigger && styles.flagBigger]} />
      <View style={[styles.base1, bigger && styles.base1Bigger]} />
      <View style={[styles.base2, bigger && styles.base2Bigger]} />
    </View>
  )
}

export { Flag };