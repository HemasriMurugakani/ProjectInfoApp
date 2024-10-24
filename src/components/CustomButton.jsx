import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View } from 'react-native';
import DownArrow from '../assets/icons/DownArrow';

const { width, height } = Dimensions.get('window');

const CustomButton = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
        <DownArrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',  
    width: '100%',             
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#002A6B',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,  
    height: height * 0.06,            
    minWidth: width * 0.25,           
  },
  buttonText: {
    color: '#002A6B',
    fontSize: width * 0.04,          
    marginRight: 8,                  
    flexShrink: 1,                   
    textAlign: 'center',
  },
});

export default CustomButton;
