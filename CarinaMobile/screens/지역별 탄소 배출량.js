import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLegend } from 'victory-native';
import ModalDropdown from 'react-native-modal-dropdown';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2018');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.0.29:8080/cbs/app/getcarbon', {
          year: selectedYear,
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
  }, [selectedYear]);

  return (
    <SafeAreaView>
      {/* 드롭다운 메뉴 */}
      <View style={{ flexDirection: 'row', marginTop: 100, marginBottom: 20 }}>
        <View style={{ marginRight: 10 }}>
          <Text>연도 선택:</Text>
          <ModalDropdown
            options={['2019', '2020', '2021', '2022']}
            onSelect={(index, value) => setSelectedYear(value)}>
            <Text>{selectedYear}</Text>
          </ModalDropdown>
        </View>
      </View>
      <ScrollView horizontal>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <VictoryChart width={1800} height={500} padding={{ left: 50, right: 50, top: 20, bottom: 50 }}>
            <VictoryGroup offset={20} colorScale={['#8621F4', '#2196F3', '#4CAF50', '#FFC107']}>
              <VictoryBar
                data={data}
                x="city"
                y="carbonEmissions"
              />
              <VictoryBar
                data={data}
                x="city"
                y="electricity"
              />
              <VictoryBar
                data={data}
                x="city"
                y="greenhouseGas"
              />
              <VictoryBar
                data={data}
                x="city"
                y="carbonAbsorption"
              />
            </VictoryGroup>
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: 'transparent' },
                ticks: { stroke: 'transparent' },
                tickLabels: { fontSize: 10, fill: 'black' },
              }}
            />
            <VictoryAxis
              tickValues={data.map((entry, index) => index)}
              tickFormat={data.map(entry => entry.city)}
              style={{
                ticks: { stroke: 'transparent' },
                tickLabels: { fontSize: 10, fill: 'black', angle: -45, textAnchor: 'end' },
              }}
            />
          </VictoryChart>
        </View>
      </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <VictoryLegend
          x={10}
          y={10}
          orientation="horizontal"
          colorScale={['#8621F4', '#2196F3', '#4CAF50', '#FFC107']}
          data={[
            { name: 'Carbon Emissions' },
            { name: 'Electricity' },
            { name: 'Greenhouse Gas' },
            { name: 'Carbon Absorption' },
          ]}
        />
      </View>
      {/* 나머지 컴포넌트 */}
      {/* ... */}
    </SafeAreaView>
  );
};

export default App;
