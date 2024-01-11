import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostItem from './PostItem';

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [profileImg, setProfileImg] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // asyncStorage에서 profileimg 값 가져오기
        const profileImgValue = await AsyncStorage.getItem('profileimg');
        // profileimg 값이 존재하면 해당 값을 state에 설정
        if (profileImgValue) {
          setProfileImg(parseInt(profileImgValue, 10));
        }

        const response = await axios.get('http://192.168.0.40:8080/app/actboard');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data.map((postData, index) => (
        <PostItem
          key={index}
          data={{
            postTitle: postData.memId,
            postName: postData.boardTitle,
            postPersonImage: { uri: 'http://192.168.0.40:8080/download?imageFileName=d4318c6f-7e30-4097-af4d-a4bc135ac222.jpg' },
            postImage: { uri: `http://192.168.0.40:8080/${postData.actImg}` },
            postContent: postData.boardContent,
            likes: postData.actHit,
          }}
        />
      ))}
    </View>
  );
};

export default Posts;
