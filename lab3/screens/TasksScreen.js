import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useGame } from '../context/GameContext';
import TaskItem from '../components/TaskItem';

const TasksScreen = () => {
  const { tasks } = useGame();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TasksScreen;