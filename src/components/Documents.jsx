import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Documents = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>Documents</Text>
      <Text style={styles.count}>26</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Documents;
