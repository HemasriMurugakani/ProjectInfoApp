import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import TaskCount from '../TaskCount';
import DownArrow from '../../assets/icons/DownArrow';
import RightArrow from '../../assets/icons/RightArrow';
import TitleCount from '../TitleCount';
import CustomButton from '../CustomButton';

const TaskDetails = () => {
  const navigation = useNavigation(); 

  const handleTaskPress = (task) => {
    if (task.title === 'Wireframes') {
      navigation.navigate('WireframeScreen'); 
    }
  };

  return (
    <View style={styles.taskCard}>
      <View style={styles.headerRow}>
        <TitleCount title="Task Details" badgeCount={3} />
      </View>
      <View style={styles.headerCount}>
        <CustomButton label="All" />
      </View>

      {[
        {
          title: 'Wireframes',
          id: '0214',
          date: '05/09/23',
          status: 'Yet to start',
          statusStyle: styles.statusPending,
        },
        {
          title: 'Inspection',
          id: '0212',
          date: '04/09/23',
          status: 'In-progress',
          statusStyle: styles.statusInProgress,
        },
        {
          title: 'Base layout',
          id: '0201',
          date: '02/09/23',
          status: 'Completed',
          statusStyle: styles.statusCompleted,
        },
      ].map((task, index) => (
        <TouchableOpacity key={index} onPress={() => handleTaskPress(task)} style={styles.taskRow}>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskId}>
              ID {task.id} • {task.date}
            </Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={task.statusStyle}>{task.status}</Text>
            <RightArrow style={styles.rightArrow} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    marginBottom:-2,
  },
  headerRow: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop:-25,
    marginLeft:-35,
 
  },
  headerCount: {
    alignItems: 'center',
    marginLeft: 160,
    marginTop: -70,
  },
  
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskInfo: {
    flex: 1,
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 14,
    color: '#333',
    fontFamily:'Poppins-Medium',
  },
  taskId: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    fontFamily:'Poppins-Medium',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusPending: {
    color: '#DF3813',
    backgroundColor: '#FFDAD3',
    padding: 6,
    borderRadius: 8,
    fontSize: 12,
    marginRight: 8,
    fontFamily:'Poppins-Medium',
  },
  statusInProgress: {
    color: '#FFA500',
    backgroundColor: '#FFDDB8',
    padding: 6,
    borderRadius: 8,
    fontSize: 12,
    marginRight: 8,
    fontFamily:'Poppins-Medium',
  },
  statusCompleted: {
    color: '#008545',
    backgroundColor: '#CBF2E0',
    padding: 6,
    borderRadius: 8,
    fontSize: 12,
    marginRight: 8,
    fontFamily:'Poppins-Medium',
  },
  rightArrow: {
    width: 20,
    height: 20,
  },
});

export default TaskDetails;
