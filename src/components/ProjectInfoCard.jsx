import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';

const ProjectInfoCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Project Info</Text>
      <Text style={styles.label}>Description</Text>

      <Text style={styles.description}>
        {isExpanded ? description : `${description.substring(0, 64)}...`}
        {!isExpanded && (
          <TouchableOpacity onPress={() => setIsExpanded(true)}>
            <Text style={styles.seeMore}> See more</Text>
          </TouchableOpacity>
        )}
      </Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Start date</Text>
          <Text style={styles.date}>01/09/23</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>End date</Text>
          <Text style={styles.date}>04/12/23</Text>
        </View>
        <View style={styles.statusColumn}>
          <Text style={styles.label}>Status</Text>
          <View style={styles.progressContainer}>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.78}
                color="#008545"
                style={styles.progressBar}
              />
            ) : (
              <ProgressViewIOS
                progress={0.78}
                progressTintColor="#4caf50"
                style={styles.progressBar}
              />
            )}
            <Text style={styles.percentage}>78%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#02111A',
  },
  label: {
    fontSize: 14,
    color: '#6A7175',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#4E585E',
    marginBottom: 8,
    lineHeight: 20, 
  },
  seeMore: {
    color: '#f2994a', // Orange color for "See more"
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  column: {
    flex: 1,
  },
  statusColumn: {
    flex: 1.5,
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 12, // Slightly increase the height for a thicker bar
    borderRadius: 6, // Rounded corners: half the height for circle-like ends
    backgroundColor: '#CBF2E0', // Track background color
  },
  percentage: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
});

export default ProjectInfoCard;