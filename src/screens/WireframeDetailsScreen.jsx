
import React from 'react';
import { View, Text, StyleSheet, ScrollView, CheckBox, Image } from 'react-native';

const WireframeDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Task Info */}
      <View style={styles.taskInfo}>
        <Text style={styles.title}>Task Info • 05/09/23</Text>
        <Text style={styles.description}>At vero eos et accusamus et iusto odio dignissimos ducimus...</Text>
        <View style={styles.metaData}>
          <Text style={styles.metaItem}>ID: 0213</Text>
          <Text style={styles.metaItem}>Type: General</Text>
          <Text style={styles.metaItem}>Priority: Medium</Text>
        </View>
      </View>

      {/* Checklist */}
      <View style={styles.checklist}>
        <Text style={styles.sectionTitle}>Check list</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox value={false} />
          <Text>Creating IA for project management</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={false} />
          <Text>Flow chart ideation</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={true} />
          <Text>UI layout setup</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={false} />
          <Text>Basic UI components</Text>
        </View>
      </View>

      {/* Log Expense */}
      <View style={styles.logExpense}>
        <Text style={styles.sectionTitle}>Log Expense</Text>
        <View style={styles.expenseItem}>
          <Text>Expense name: 04/09/23 • 1050 AED</Text>
        </View>
        <View style={styles.expenseItem}>
          <Text>Note buying: 01/09/23 • 241 AED</Text>
        </View>
      </View>

      {/* Comments */}
      <View style={styles.comments}>
        <Text style={styles.sectionTitle}>Comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Hamza</Text>
          <Text style={styles.commentText}>Harum quidem rerum facilis est et expedita...</Text>
          <Text style={styles.commentTime}>1 day ago</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Mohammed</Text>
          <Text style={styles.commentText}>Sure, Thanks</Text>
          <Text style={styles.commentTime}>12 hrs ago</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  taskInfo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
  },
  metaData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaItem: {
    fontSize: 12,
    color: '#555',
  },
  checklist: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logExpense: {
    marginBottom: 20,
  },
  expenseItem: {
    paddingVertical: 5,
  },
  comments: {
    marginBottom: 20,
  },
  comment: {
    paddingVertical: 5,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  commentText: {
    marginVertical: 5,
  },
  commentTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default WireframeDetailsScreen;
