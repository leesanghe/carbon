import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Circle, G, Line, Text } from 'react-native-svg';
const ChartComponent = ({ data }) => {
  // 프롭에서 데이터 추출
  const { cities, data: actualData, predictedMonths, predictedPowerUsage } = data;

  // 데이터 유효성 검사
  if (!actualData || !predictedMonths || !predictedPowerUsage) {
    return (
      <View style={styles.container}>
        <Text>Data is not available.</Text>
      </View>
    );
  }

  // 실제 및 예측 데이터 결합
  const chartData = {
    labels: predictedMonths,
    datasets: [
      {
        data: actualData.map((value) => parseFloat(value)),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // 실제 데이터를 위한 파란색
      },
      {
        data: predictedPowerUsage.map((value) => parseFloat(value)),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // 예측 데이터를 위한 빨간색
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        width={400}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default ChartComponent;
