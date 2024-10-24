import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const AssetList = ({ assets }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Assets</Text>
      <FlatList
        horizontal
        data={assets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.assetContainer}>
            <Image source={{ uri: item.image }} style={styles.assetImage} />
            <Text style={styles.assetName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  assetContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  assetImage: {
    width: 50,
    height: 50,
  },
  assetName: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default AssetList;
