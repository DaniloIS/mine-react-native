import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { params } from './src/params';
import { Field } from './src/components/Field';
import { MineField } from './src/components/MineField';
import { createMinedBoard } from './src/functions';

export default function App() {
  const minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  const createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, minesAmount()),
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Iniciando o Mines!!!
      </Text>
      <Text>
        Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      <View style={styles.board}>
        <MineField board={createState().board} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
