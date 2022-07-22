import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { params } from './src/params';
import { MineField } from './src/components/MineField';
import { Header } from './src/components/Header';
import { LevelSelection } from './src/components/LevelSelection';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions';

export default function App() {
  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [show, setShow] = useState(false)

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
    setBoard(createState().board)
    setWon(createState().won)
    setLost(createState().lost)
  }, [])

  const onOpenField = (row, column) => {
    const b = cloneBoard(board)
    openField(b, row, column)
    const l  = hadExplosion(b)
    const w = wonGame(b)

    if(l) {
      showMines(b)
      Alert.alert('Perdeeeeeu!', 'Que buuuro!')
    }

    if(w) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    setBoard(b)
    setWon(w)
    setLost(l)
  }

  const onSelectField = (row, column) => {
    const b = cloneBoard(board)
    invertFlag(b, row, column)
    const w = wonGame(b)

    if(w) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    setBoard(b)
    setWon(w)
  }
  
  const onLevelSelected = lvl => {
    params.difficultLevel = lvl
    setState(createState())
  }
  return (
    <View style={styles.container}>
      <LevelSelection isVisible={show} onLevelSelected={onLevelSelected} onCancel={() => setShow(false)} />
      <Header flagsLeft={minesAmount() - flagsUsed(board)} onNewGame={() => {setBoard(createState().board), setWon(createState().won), setLost(createState().lost)}} onFlagPress={() => setShow(true)} />
      <View style={styles.board}>
       {board && <MineField board={board} onOpenField={onOpenField} onSelectField={onSelectField} />}
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
