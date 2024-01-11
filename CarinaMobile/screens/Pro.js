import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, Text, DevSettings} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePickerComponent from "../components/Photo";
import DropdownMenu from '../components/DropdownMenu';
import axios from 'axios';

const Pro = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState(null);
  const [postContent, setPostContent] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [photo, setPhoto] = useState(undefined);
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    checkMemId();
  }, []);

  const checkMemId = async () => {
    try {
      const memId = await AsyncStorage.getItem('memId');
      if (!memId) {
        navigation.navigate('로그인');
      }
    } catch (error) {
      console.error('Error checking memId:', error);
    }
  };

  const handlePostSubmit = async () => {
    try {
      const memId = await AsyncStorage.getItem('memId');
      console.log('___',memId);
      if (!memId) {
        navigation.navigate('로그인');
        return;
      }
  
      const postData = {
        category:"식사할때 먹을만큼만 덜어서 먹기",
        boardTitle: postTitle,
        boardContent: postContent,
        memId: memId,
        actImg : photo
        
      };

      console.log(postTitle)
      console.log(postContent)
      console.log(memId)
      console.log(photo)
      
    

      const response = await axios.post(
        'http://192.168.0.29:8080/cbs/app/actboard/actboardwrite',
        postData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
  
      if (response.status === 200) {
        Alert.alert('성공', '게시글이 정상적으로 작성되었습니다.');
        navigation.navigate('실천 일지');
         DevSettings.reload();
        setPosts([...posts, response.data]);
        setPostTitle('');
        setPostCategory(null);
        setPostContent('');
        setImageSource(null);
      } else {
        Alert.alert(`에러 ${response.status}`, '게시글 작성 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="게시글 제목을 입력하세요"
        value={postTitle}
        onChangeText={(text) => setPostTitle(text)}
      />
      <TextInput
        style={styles.input2}
        placeholder="게시글을 입력하세요"
        value={postContent}
        onChangeText={(text) => setPostContent(text)}
        multiline={true}
      />
      <DropdownMenu />
      <ImagePickerComponent onChangePhoto={setPhoto} style={{ zIndex: 3 }} />
      <Button title="게시글 작성" onPress={handlePostSubmit} />
      <View>
        {posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <Text>{post.title}</Text>
            <Text>{post.category}</Text>
            <Text>{post.content}</Text>
            {post.image && <Image source={post.image} style={{ width: 200, height: 200 }} />}
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 100,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'black',
    backgroundColor: 'white',
  },
  input2: {
    height: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    zIndex: 0
  },
  postContainer: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
  },
});
export default Pro; 