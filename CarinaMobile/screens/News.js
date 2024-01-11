import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  Modal,
  View,
  Button,
  StyleSheet,
  Linking,
} from 'react-native';
import axios from 'axios';

const removeHtmlTags = (htmlString) => {
  // 정규 표현식을 사용하여 HTML 태그 제거
  return htmlString.replace(/<[^>]*>/g, '');
};

const News = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.0.29:8080/cbs/app/news'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} Pressed`);

    // 기존의 간단한 문자열 대신 데이터를 참조하여 동적으로 내용 설정
    if (buttonNumber <= data.length) {
      const selectedNews = data[buttonNumber - 1];
      setModalContent({
        title: selectedNews.title,
        description: removeHtmlTags(selectedNews.description),
        link: selectedNews.link,
      });
      setModalVisible(true);
    } else {
      setModalContent('');
      setModalVisible(true);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.articles}
    >
      <View style={styles.gridContainer}>
        {data.slice(0, 2).map((item, index) => (
          <TouchableOpacity
            key={index + 1}
            style={styles.gridButton}
            onPress={() => handleButtonPress(index + 1)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.gridContainer}>
        {data.slice(2, 4).map((item, index) => (
          <TouchableOpacity
            key={index + 3}
            style={styles.gridButton}
            onPress={() => handleButtonPress(index + 3)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.gridContainer}>
        {data.slice(4, 6).map((item, index) => (
          <TouchableOpacity
            key={index + 5}
            style={styles.gridButton}
            onPress={() => handleButtonPress(index + 5)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{modalContent.title}</Text>
            <Text>{modalContent.description}</Text>
            {modalContent.link && (
              <TouchableOpacity
                onPress={() => Linking.openURL(modalContent.link)}
                style={styles.linkButton}
              >
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  링크 열기
                </Text>
              </TouchableOpacity>
            )}
            <Button
              title="닫기"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  articles: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 30
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  gridButton: {
    backgroundColor: '#3498DB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 180,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: 300,
    height: 400,
    justifyContent: 'space-between',
  },
  linkButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default News;
