import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 10,
    width: 110,
    backgroundColor: '#e0f2f1', 
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10, 
  },
  progress: {
    height: '100%',
    backgroundColor: '#2e7d32', 
  },
  progressText: {
    fontSize: 14,
    color: '#37474f', 
    fontFamily:'Poppins-Medium',
  },
});


export default ProgressBar;
