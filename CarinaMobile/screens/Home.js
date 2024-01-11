import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  
} from 'react-native';
import Posts from '../components/Posts';
const YourComponent = () => {
 
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.articles}
    >
      <Posts />
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  articles: {},
  gridContainer: {
    marginVertical: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  gridButton: {
    backgroundColor: '#3498DB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 180,
    marginBottom: 10,
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
});
export default YourComponent;