import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useGame } from '../context/GameContext';
import GestureBox from '../components/GestureBox';

const HomeScreen = ({ navigation }) => {
  const { score } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Очки: {score}</Text>
      
      <GestureBox />
      
      <Button 
        title="Переглянути завдання" 
        onPress={() => navigation.navigate('Tasks')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
