import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Route from './src/navigation/Route';
// https://dribbble.com/shots/15295362-Food-Recipe-App
export default function App() {
  return (
    <View style={styles.container}>
        <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
