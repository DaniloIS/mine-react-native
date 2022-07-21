import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { params } from './src/params';
import { Field } from './src/components/Field';
import { MineField } from './src/components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
} from './src/functions';

export default function App() {
  const [state, setState] = useState({});

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
      won: false,
      lost: false
    }
  }

  useEffect(() => {
    setState(createState())
  }, [])

  const onOpenField = (row, column) => {
    console.log(state.board)
    const board = cloneBoard(state.board)
    onOpenField(board, row, column)
    const lost  = hadExplosion(board)
    const won = wonGame(board)

    if(lost) {
      showMines(board)
      Alert.alert('Perdeeeeeu!', 'Que buuuro!')
    }

    if(won) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    setState({ board, lost, won })
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
        <MineField board={createState().board} onOpenField={onOpenField} />
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
