import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetails = () => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskHeader}>Task Details</Text>
      <View style={styles.taskRow}>
        <Text style={styles.taskTitle}>Wireframes</Text>
        <Text style={styles.taskDate}>05/09/23</Text>
        <Text style={styles.statusPending}>Yet to start</Text>
      </View>
      <View style={styles.taskRow}>
        <Text style={styles.taskTitle}>Inspection</Text>
        <Text style={styles.taskDate}>04/09/23</Text>
        <Text style={styles.statusInProgress}>In-progress</Text>
      </View>
      <View style={styles.taskRow}>
        <Text style={styles.taskTitle}>Base layout</Text>
        <Text style={styles.taskDate}>02/09/23</Text>
        <Text style={styles.statusCompleted}>Completed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  taskHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  taskTitle: {
    fontSize: 16,
    color: '#333',
  },
  taskDate: {
    fontSize: 14,
    color: '#777',
  },
  statusPending: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
  statusInProgress: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  statusCompleted: {
    color: '#66BB6A',
    fontWeight: 'bold',
  },
});

export default TaskDetails;
