import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; 
import { addComment } from '../../redux/commentActions'; 
import Svg, { Path } from 'react-native-svg'; 

const sampleNames = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Heidi',
  'Ivan',
  'Judy',
];

const sampleAvatars = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',

];

const CommentSection = () => {
  const comments = useSelector((state) => state.comments?.comments || []);
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    console.log('Comments changed:', comments);
  }, [comments]);

  const addNewComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        id: comments.length + 1,
        name: generateRandomUsername(),
        avatar: generateRandomAvatar(),
        text: newComment,
        time: 'Just now',
      };
      dispatch(addComment(newCommentObject));
      setNewComment('');
    }
  };

  const generateRandomUsername = () => {
    const randomIndex = Math.floor(Math.random() * sampleNames.length);
    return sampleNames[randomIndex];
  };

  const generateRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * sampleAvatars.length);
    return sampleAvatars[randomIndex];
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Comments</Text>
      <View style={[styles.commentListContainer, comments.length > 5 ? { maxHeight: 250 } : {}]}>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
          style={styles.commentList}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
      <View style={styles.addCommentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add comments"
          placeholderTextColor="gray"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={addNewComment} style={styles.sendButton}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={"#4E585E"}>
            <Path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></Path>
          </Svg>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles
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
    marginBottom: -2,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color: "black",
  },
  commentListContainer: {},
  commentList: {
    flexGrow: 0,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#E5E8EB",
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: "#02111A",
    fontSize: 14,
  },
  time: {
    color: 'gray',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  commentText: {
    marginTop: 5,
    color: "#4E585E",
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F3F6',
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor: "#F0F3F6",
    height: 50,
  },
  input: {
    flex: 1,
    height: 55,
    color: "black",
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  sendButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default CommentSection;
