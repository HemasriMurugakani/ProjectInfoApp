import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CategoryCard from '../components/Documents/CategoryCard';
import FileCard from '../components/Documents/FileCard';
import Header from '../components/Header';
import folders from '../../data/folders.json';
import documents from '../../data/documents.json';

const formatNo = (number) => number.toString().padStart(2, '0');

const FilesScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Documents" /> 
      <Text style={styles.sectionTitle}>{`${formatNo(folders.length)} Folders`}</Text>
      <FlatList
        data={folders}
        renderItem={({ item }) => <CategoryCard folder={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />

      <Text style={styles.sectionTitle}>{`${formatNo(documents.length)} Documents`}</Text>
      <FlatList
        data={documents}
        renderItem={({ item }) => <FileCard document={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
    marginHorizontal: 16,
    color: "#4E585E",
  },
  flatListContainer: {
    paddingBottom: 20, 
  },
});

export default FilesScreen;
