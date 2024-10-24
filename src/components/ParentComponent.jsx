import React, { useState } from 'react';
import { View } from 'react-native';
import MemberList from './MemberList'; // Adjust the import path as necessary
import MemberModal from './MemberModal'; // Adjust the import path as necessary

const ParentComponent = ({ members }) => {
  const [modalVisible, setModalVisible] = useState(false); // Correctly define the state
  const [selectedMembers, setSelectedMembers] = useState([]);

  const openModal = () => {
    setSelectedMembers(members); // Pass the members to the modal
    setModalVisible(true); // Set modal visibility to true
  };

  return (
    <View>
      <MemberList members={members} title="Members" onOpenModal={openModal} />
      <MemberModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible} // Ensure this is correctly passed
        members={selectedMembers}
      />
    </View>
  );
};

export default ParentComponent;
