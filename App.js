import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { View as MotiView, AnimatePresence } from 'moti';
import ScaleButton from './ScaleButton';

function Shape({ bg }) {
  return <View style={[styles.shape, { backgroundColor: bg }]} />;
}

export default function App() {
  const [counter, increment] = React.useReducer((s) => s + 1, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.buttonContainer}>
        <ScaleButton onPress={increment}>
          <Shape bg="hotpink" />
        </ScaleButton>
        <ScaleButton onPress={increment}>
          <Shape bg="cyan" />
        </ScaleButton>
        <ScaleButton onPress={increment}>
          <Shape bg="yellow" />
        </ScaleButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 48,
    marginBottom: 24,
  },
  shape: {
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c1aff',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
