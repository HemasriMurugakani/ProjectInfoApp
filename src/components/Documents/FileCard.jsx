import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

const FileCard = ({ document }) => {
  return (
    <Card containerStyle={styles.documentCard}>
      <View style={styles.documentContainer}>
        {/* Box Container for Icon */}
        <View style={styles.iconBox}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.width-500.format-webp.webp' }} // Replace with your document icon URL
            style={styles.icon}
          />
        </View>
        <View style={styles.documentInfo}>
          <Text style={styles.documentTitle}>{document.title}</Text>
          <Text style={styles.documentDate}>Created on {document.date}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  documentCard: {
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: '#fff',
    height: 80,
    width: 380,
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 50,   
    height: 50,  
    borderRadius: 12, 
    backgroundColor: '#F0F3F6', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30, 
    resizeMode: 'contain',
  },
  documentInfo: {
    marginLeft: 15,
    fontFamily:'Poppins-Medium',
  },
  documentTitle: {
    fontSize: 14,
    fontFamily:'Poppins-SemiBold',
    color: '#2e3a59',
  },
  documentDate: {
    fontSize: 12,
    color: '#8a94a6', 
    marginTop: 2,
    fontFamily:'Poppins-Medium',
  },
});

export default FileCard;