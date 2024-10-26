import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TaskDetails from '../components/Home/TaskDetails';
import MemberList from '../components/Home/MemberList';
import AssetList from '../components/Home/AssetList';
import ProjectProgressBar from '../components/Home/ProjectInfoCard';
import Header from '../components/Header';
import ProjectInfoCard from '../components/Home/ProjectInfoCard';
import TitleCount from '../components/TitleCount';
import RightArrow from '../assets/icons/RightArrow';
import ParentComponent from '../components/MembModal';

const MetanusUIDesign = ({ navigation }) => {
  const documentCount = 26; 
  const members = [
    {
      id: '1',
      name: 'Hema',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5pECCdUP4_FFv6f8293ATFJEZOPRFdNOz3XrYmT8wLjIvNVAi',
    },
    {
      id: '2',
      name: 'Agaran',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKdkBdBQ9PemJrdzNSEzWKDq5YYSS1-h9y1PfPLSRtVTyqZOn',
    },
    {
      id: '3',
      name: 'Leenu',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5pECCdUP4_FFv6f8293ATFJEZOPRFdNOz3XrYmT8wLjIvNVAi',
    },
    {
      id: '4',
      name: 'Kumaran',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGXEpIHqC0kl5WzjLaLkJeCVPn4p5IKqTrA&s',
    },
    {
      id: '5',
      name: 'Vihaan',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5pECCdUP4_FFv6f8293ATFJEZOPRFdNOz3XrYmT8wLjIvNVAi',
    },
  ];

  const assets = [
    {
      id: '1',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnWO0MEXw9N9NiBofPZ_Pg-IdPV7_-o_MxQ1AH6P573YyrqW9q',
      name: 'JCB',
    },
    {
      id: '2',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6X6-3BvIYOqvWdUGLBVHMI-sd1PeBUtuwz2KsaB0tbm8cOHgH',
      name: 'Asset Name',
    },
    {
      id: '3',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZaTgVcCyqKcfCGL4iJKD5QBadf7u0NhWw52xZ_qRoGjPp49dL',
      name: 'Laptop Dell',
    },
    {
      id: '4',
      image: 'https://m.media-amazon.com/images/I/61pc0xVMJBL._SX522_.jpg',
      name: 'Laptop HP',
    },
    {
      id: '5',
      image: 'https://m.media-amazon.com/images/I/71HwYi43pUL._SX522_.jpg',
      name: 'Toy Gun',
    },
    {
      id: '6',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/81T3olLXpUL._AC_UL600_SR600,400_.jpg',
      name: '',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Metanus UI Design" />
      <ProjectInfoCard />
      <TaskDetails />
      <MemberList members={members} title="Members" />
      <AssetList assets={assets} />
      <View style={styles.documentSection}> 
        <TitleCount
          title="Documents"
          badgeCount={documentCount} 
          RightArrowIcon={RightArrow}
          navigation={navigation} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  rightArrow: {
    width: 20,
    height: 20,
  },
});

export default MetanusUIDesign;
