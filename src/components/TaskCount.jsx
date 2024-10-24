import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCount = ({ count }) => {
  return (
    <View style={styles.taskCountCircle}>
      <Text style={styles.taskCount}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCountCircle: {
    backgroundColor: '#D7E3FF',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 10,
    height:28,
    width:38,
  },
  taskCount: {
    color: '#0C356A',
    fontWeight: 'bold',
    alignItems:'center'
  },
});

export default TaskCount;
