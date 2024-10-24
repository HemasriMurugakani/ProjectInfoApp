import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const MemberList = ({ members }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Members</Text>
      <FlatList
        horizontal
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.memberImage} />
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
  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default MemberList;
