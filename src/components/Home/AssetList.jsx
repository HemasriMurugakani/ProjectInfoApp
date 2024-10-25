import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const imageSize = width * 0.25; 

const AssetList = ({ assets }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Assets</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
    padding: 10,
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
  sectionTitle: {
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    color: '#02111A',
    marginLeft:7,
  },
  assetContainer: {
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10, 
  },
  assetImage: {
    width: imageSize, 
    height: imageSize, 
    borderRadius: 12,
  },
  assetName: {
    marginTop: 5,
    fontSize: 12,
    fontFamily:'Poppins-Medium',
  },
});

export default AssetList;
