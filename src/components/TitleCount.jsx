import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TitleCount = ({ title, badgeCount, RightArrowIcon, navigation }) => {
  const formattedBadgeCount = badgeCount < 10 ? `0${badgeCount}` : badgeCount;

  // Handle press to navigate
  const handlePress = () => {
    navigation.navigate('FilesScreen'); // Adjust this to your desired screen
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{formattedBadgeCount}</Text>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        {RightArrowIcon && <RightArrowIcon style={styles.rightArrow} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  badgeContainer: {
    marginLeft: 10,
  },
  badge: {
    backgroundColor: '#D7E3FF',
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#0C356A',
    fontWeight: 'bold',
  },
  arrowContainer: {
    marginLeft: 'auto',
  },
  rightArrow: {
    width: 24,
    height: 24,
  },
});

export default TitleCount;
