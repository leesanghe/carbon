import { Header, Icon } from "../components";
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import axios from 'axios';
import ChartComponent from '../components/ChartComponent';
import ModalDropdown from 'react-native-modal-dropdown';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2018');
  const [selectedMetro, setSelectedMetro] = useState('부산광역시');
  const [selectedCity, setSelectedCity] = useState('해운대구');
  const [cityList, setCityList] = useState([]);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('10%');
  const [avg, setAvg] = useState(null); // 추가된 부분



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.0.29:8080/cbs/app/powerPrediction/getMonthData', {
          year: selectedYear,
          metro: selectedMetro,
          city: selectedCity,
        });
        setData(response.data);

        console.log('Data from the server:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear, selectedMetro, selectedCity]);

  useEffect(() => {
    updateCityList(); // Metro가 변경되면 항상 도시 목록을 업데이트
  }, [selectedMetro]);

  useEffect(() => {
    getAverage();
  }, [selectedYear, selectedMetro, selectedCity]);


  const updateCityList = async () => {
    try {
      const response = await axios.post('http://192.168.0.29:8080/cbs/app/powerPrediction/getCities', {
        year: selectedYear,
        metro: selectedMetro,
      });
      const cities = response.data;

      setCityList(cities);

      // Update city list using state
      // ...
    } catch (error) {
      console.error('Failed to get city data:', error.message);
    }
  };

  const getAverage = async () => {
    try {
      const response = await axios.post('http://192.168.0.29:8080/cbs/app/powerPrediction/getAverageYearAndMetroAndCities', {
        year: selectedYear,
        metro: selectedMetro,
        city: selectedCity
      });
      console.log("선택된 년도", selectedYear)
      console.log("선택된 시/도", selectedMetro)
      console.log("선택된 군/구", selectedCity)
      console.log("평균값:", response)
      const avgValue = response.data;
      setAvg(avgValue); // 추가된 부분
    } catch (error) {
      console.error('Failed to get city data:', error.message);
    }
  }
  return (

    <SafeAreaView>

      {/* Dropdown menus */}
      <View style={{ flexDirection: 'row', marginTop: 100 }}>
        <View style={{ flex: 1, marginRight: 10, marginLeft: 20 }}>
          <Text>년도 선택</Text>
          <ModalDropdown
            options={['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']}
            onSelect={(index, value) => setSelectedYear(value)}>
            <Text>{selectedYear}</Text>
          </ModalDropdown>
        </View>

        <View style={{ flex: 1, marginRight: 10 }}>
          <Text>시/도 선택</Text>
          <ModalDropdown
            options={['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도']}
            onSelect={(index, value) => {
              setSelectedMetro(value);
            }}>
            <Text>{selectedMetro}</Text>
          </ModalDropdown>
        </View>

        <View style={{ flex: 1 }}>
          <Text>군/구 선택</Text>
          <ModalDropdown
            options={cityList}
            onSelect={(index, value) => setSelectedCity(value)}

          >
            <Text>{selectedCity}</Text>
          </ModalDropdown>
        </View>
      </View>


      <ChartComponent data={data}>
      </ChartComponent>

      {/* Dropdown for 1, 2, 3 */}
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text>목표량 설정하기</Text>
        <ModalDropdown
          options={['10%', '20%', '30%']}
          onSelect={(index, value) => setSelectedDropdownValue(value)}
        >
          <Text>{selectedDropdownValue}</Text>
        </ModalDropdown>
        <View style={{ width: 350, height: 300, backgroundColor: 'skyblue', opacity: 0.5, marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>
            {selectedYear}년 {selectedMetro} {selectedCity} 평균 전력 예측 사용량은 {avg !== null ? avg.toFixed(2) : '로딩 중입니다.'} 입니다.
            과거와 비교하여 {selectedDropdownValue} 절약하여 받을 수 있는 탄소 포인트는{' '}
            {(() => {
              switch (selectedDropdownValue) {
                case '10%':
                  return '10000P';
                case '20%':
                  return '15000P';
                case '30%':
                  return '20000P';
                default:
                  return '';
              }
            })()}입니다.
          </Text>
        </View>

      </View>

      {/* ... */}
    </SafeAreaView>
  );
};

export default App;
