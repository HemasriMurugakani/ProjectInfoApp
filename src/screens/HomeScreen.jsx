import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import TaskDetails from '../components/TaskDetails';
import MemberList from '../components/MemberList';
import AssetList from '../components/AssetList';
import ProjectProgressBar from '../components/ProjectInfoCard';
import Header from '../components/Header';
import ProjectInfoCard from '../components/ProjectInfoCard';

const App = () => {
  const tasks = [
    { id: '0214', name: 'Wireframes', date: '05/09/23', status: 'Yet to start', statusColor: 'red' },
    { id: '0212', name: 'Inspection', date: '04/09/23', status: 'In-progress', statusColor: 'orange' },
    { id: '0201', name: 'Base layout', date: '02/09/23', status: 'Completed', statusColor: 'green' },
  ];

  const members = [
    { id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJKncgYFP-O8CwJz4o989Jx1TzcWf82CkRw&s' },
    { id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s' },
    { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s' },
  ];

  const assets = [
    { id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s', name: 'JCB' },
    { id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s', name: 'Laptop Dell' },
    { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s', name: 'Laptop HP' },
  ];

  return (
    <ScrollView style={styles.container}>
     <Header title="Metanus UI Design" />
      <ProjectInfoCard/>

      {/* Task Details */}
      <TaskDetails tasks={tasks} />

      {/* Members */}
      <MemberList members={members} />

      {/* Assets */}
      <AssetList assets={assets} />

      {/* Documents */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
        <Text style={styles.documentCount}>26</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectInfo: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
    marginVertical: 5,
  },
  seeMore: {
    color: '#1E90FF',
  },
  projectDates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  documentCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
});

export default App;
