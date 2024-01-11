// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';

// const ChartComponent = ({ data }) => {
//   // 프롭에서 데이터 추출
//   const cities = data.map(entry => entry.city);
//   const carbonAbsorptionData = data.map(entry => entry.carbonAbsorption);

//   // 데이터 유효성 검사
//   if (!cities || !carbonAbsorptionData) {
//     return (
//       <View style={styles.container}>
//         <Text>Data is not available.</Text>
//       </View>
//     );
//   }

//   const chartData = data.map((entry, index) => ({ x: cities[index], y: entry.carbonAbsorption }));

//   return (
//     <View style={styles.container}>
//       <VictoryChart width={300} height={200}>
//         <VictoryBar
//           data={chartData}
//           style={{ data: { fill: '#8621F4' } }}
//           barRatio={0.8}
//         />
//         <VictoryAxis
//           dependentAxis
//           tickValues={[]} // 레이블을 비우기 위해 빈 배열을 설정
//           style={{
//             axis: { stroke: 'transparent' },
//             ticks: { stroke: 'transparent' },
//             tickLabels: { fontSize: 10, fill: 'black' },
//           }}
//         />
//         <VictoryAxis
//           tickValues={chartData.map((entry, index) => index)}
//           tickFormat={chartData.map(entry => entry.x)}
//           style={{
//             ticks: { stroke: 'transparent' },
//             tickLabels: { fontSize: 10, fill: 'black' },
//           }}
//         />
//       </VictoryChart>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
// });

// export default ChartComponent;
