import React, { useState } from 'react';
import { View, Text, TouchableOpacity , Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
const MenuComponent = ({ onDelete, onEdit }) => {
  // 항상 열려있는 상태로 시작
  const [isMenuOpen, setMenuOpen] = useState(true);
  const handleDelete = () => {
    Alert.alert(
        '삭제 확인',
        '정말로 삭제하시겠습니까?',
        [
          {
            text: '취소',
            onPress: () => console.log('삭제 취소'),
            style: 'cancel',
          },
          {
            text: '삭제',
            onPress: () => {
              // 삭제 동작을 부모 컴포넌트로 전달
              onDelete();
              // 메뉴 닫기
              closeMenu();
            },
          },
        ],
        { cancelable: false }
      );
    };
  const closeMenu = () => {
    // 메뉴를 닫는 함수
    // 추가적인 동작이 필요하다면 여기에 추가
    setMenuOpen(false);
  };
  if (!isMenuOpen) {
    return null; // isMenuOpen이 false일 때 렌더링하지 않음
  }
  return (
    <View style={styles.menuContainer}>
      {isMenuOpen && (
        <React.Fragment>
          <TouchableOpacity onPress={handleDelete} style={styles.menuItem}>
            <Feather name="trash-2" style={styles.menuIcon} />
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onEdit} style={styles.menuItem}>
            <Feather name="edit" style={styles.menuIcon} />
            <Text>Edit</Text>
          </TouchableOpacity>
          {/* 추가: 메뉴 닫기 버튼 */}
          <TouchableOpacity onPress={closeMenu} style={styles.menuItem}>
            <Feather name="x" style={styles.menuIcon} />
            <Text>Close</Text>
          </TouchableOpacity>
        </React.Fragment>
      )}
    </View>
  );
};
const styles = {
  menuContainer: {
    position: 'relative',
    top: 0,
    right: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    zIndex: 9999,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuIcon: {
    marginRight: 8,
    fontSize: 18,
    color: 'black',
  },
};
export default MenuComponent;