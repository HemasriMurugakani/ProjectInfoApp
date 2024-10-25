import React from 'react';
import { Text, StyleSheet, Image, View, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

const { width } = Dimensions.get('window'); // Get device width

const FolderCard = ({ folder }) => {
  return (
    <Card containerStyle={styles.folderCard}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMFgOTzXFcygcpN13gzzVZIthZHdu8Fmx52qtf9JlDgtCambv' }} // Replace with your folder icon URL
        style={styles.icon}
      />
      <Text style={styles.folderName}>{folder.name}</Text>
      <Text style={styles.folderDetails}>{folder.documents}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  folderCard: {
    width: width * 0.43, 
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 12, 
    marginLeft:15,
    marginBottom:10,
  },
  content: {
    alignItems: 'flex-start',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  folderName: {
    fontSize: 14,
    fontFamily:'Poppins-SemiBold', 
    marginTop: 12,
    color: '#222B45',
  },
  folderDetails: {
    fontSize: 12,
    color: '#8F9BB3', 
    marginTop: 4,
    fontFamily:'Poppins-Medium',
  },
});

export default FolderCard;
