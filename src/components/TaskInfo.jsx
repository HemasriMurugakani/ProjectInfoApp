import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const TaskInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.infoText}>Task Info • 05/09/23</Text>
            <CustomButton label={"Yet"}/>
      </View>
      <Text style={styles.description}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...{' '}
        <Text style={styles.moreText}>See more</Text>
      </Text>
      <View style={styles.detailsRow}>
        <Text style={styles.detail}>ID 0213</Text>
        <Text style={styles.detail}>Type: General</Text>
        <Text style={styles.detail}>Priority: Medium</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    marginBottom: -2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    fontFamily:'Poppins-SemiBold',
  },
  description: {
    marginVertical: 10,
    color: '#333',
    fontFamily:'Poppins-Medium',
    fontSize:14,
  },
  moreText: {
    color: '#FF9000',
    fontFamily:'Poppins-Medium',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    color: '#555',
    fontSize: 12,
    fontFamily:'Poppins-Medium',
  },
});

export default TaskInfo;
