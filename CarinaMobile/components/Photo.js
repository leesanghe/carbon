import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Pressable, Text, Image, TouchableOpacity } from "react-native";
import axios from "axios";

const ImagePickerComponent = ({ onChangePhoto }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1]
    });

    if (result.cancelled) {
      return null;
    }

    console.log(result);
    setImageUrl(result.uri);
    onChangePhoto(result.uri); // 수정된 부분

    // 서버에 요청 보내기
    const localUri = result.uri;
    const filename = localUri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename ?? '');
    const type = match ? `image/${match[1]}` : `image`;

    const formData = new FormData();
    formData.append('image', { uri: localUri, name: filename, type });

    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.40:8080/multiImgUpload', // 실제 API 주소로 변경해야 합니다.
        headers: {
          'content-type': 'multipart/form-data',
        },
        data: formData,
      });

      if (response.status === 200) {
        console.log('Upload successful', response.data);
        // 성공적으로 업로드된 경우에 추가적인 로직을 수행할 수 있습니다.
      } else {
        console.log('Upload failed', response.data);
        // 실패한 경우에 대한 처리를 추가할 수 있습니다.
      }
    } catch (error) {
      console.error('이미지 업로드에 실패했습니다:', error);
      // 실패한 경우에 대한 처리를 추가할 수 있습니다.
    }
  };

  return (
    <TouchableOpacity onPress={uploadImage} style={{ alignItems: 'center', marginBottom: 20, marginTop: 10 }}>
      <Text>이미지 업로드하기</Text>
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />}
    </TouchableOpacity>
  );
};

export default ImagePickerComponent;
