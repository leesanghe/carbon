import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({ label: '본관 1층', value: '1' });
  const [items, setItems] = useState([
    { label: '식사할때 먹을만큼만 덜어서 먹기', value: '1' },
    { label: '난방에너지 절약하기', value: '2' },
    { label: '다회용컵과 텀블러 사용하기', value: '3' },
    { label: '가까운 거리는 걷고 먼 거리는 대중 교통 이용하기', value: '4' },
    { label: '친환경 제품 사용하기 ', value: '5' },
  ]);
  // 현재 선택된 값
  const [currentValue, setCurrentValue] = useState(1);
  // 드롭다운 메뉴를 선택할 때마다 값 변경
  const onChange = (value, index) => {
    switch (value) {
      case '1':
        setCurrentValue(1);
        break;
      case '2':
        setCurrentValue(2);
        break;
      case '3':
        setCurrentValue(3);
        break;
      case '4':
        setCurrentValue(4);
        break;
      case '5':
        setCurrentValue(5);
  
        break;
      default:
        setCurrentValue(1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          placeholder="식사할때 먹을만큼만 덜어서 먹기"
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxHeight={300} // 옵션이 많으면 잘려서 나오는데, 이때 maxHeight를 사용하여 길이를 조절하면 된다.
          onChangeValue={onChange} // 값이 바뀔 때마다 실행
          listItemContainerStyle={styles.dropdown}
          dropDownDirection="TOP" // 드롭다운 방향 설정
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    position: 'relative',
    flex: 0.8,
     // zIndex 추가
    marginTop: 10,
    marginBottom: 50,
  },
  dropdown: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  dropDownStyle: {
    backgroundColor: '#FAFAFA', // 드롭다운 배경색 지정
  },
});
export default DropdownMenu;