import React from 'react';
import { Modal, View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const MemberModal = ({ modalVisible, setModalVisible, members }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <ScrollView>
            {members.map((member) => (
              <View key={member.id} style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberEmail}>{member.email}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  memberInfo: {
    marginBottom: 15,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberEmail: {
    fontSize: 16,
    color: '#555',
  },
});

export default MemberModal;
