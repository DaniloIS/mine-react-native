import React from 'react';
import { View, Text } from 'react-native';

import { Mine } from '../Mine';
import { Flag } from '../Flag';

import styles from './styles';

const Field = ({ mined = '', opened = false, nearMines = '', exploded = false, flagged = false }) => {
  const styleField = [styles.field]
  if(opened) styleField.push(styles.opened)
  if(exploded) styleField.push(styles.exploded)
  if(flagged) styleField.push(styles.flagged)
  if(!opened && !exploded) styleField.push(styles.regular)

  let color = null
  if(nearMines > 0) {
    if(nearMines == 1) color = '#2A28D7'
    if(nearMines == 2) color = '#2B520F'
    if(nearMines > 2 && nearMines < 6) color = '#F9060A'
    if(nearMines >= 6) color = '#F221A9'
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? 
        <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
        :
        false
      }

      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  )
}

export { Field };