import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        {task.description}
        {task.count !== undefined && ` (${task.count}/${task.required})`}
      </Text>
      <Text style={task.completed ? styles.completed : styles.pending}>
        {task.completed ? '✓ Виконано' : '⨯ Не виконано'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  description: {
    fontSize: 16,
  },
  completed: {
    color: 'green',
    fontWeight: 'bold',
  },
  pending: {
    color: 'red',
  },
});

export default TaskItem;