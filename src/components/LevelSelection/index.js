import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

import styles from './styles';

const LevelSelection = ({ isVisible, onCancel, onLevelSelected }) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType='slide'
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <TouchableOpacity
            style={[styles.button, styles.btnEasy]}
            onPress={() => onLevelSelected(0.1)}
          >
            <Text style={styles.btnLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btnNormal]}
            onPress={() => onLevelSelected(0.2)}
          >
            <Text style={styles.btnLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btnHard]}
            onPress={() => onLevelSelected(0.3)}
          >
            <Text style={styles.btnLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export { LevelSelection };