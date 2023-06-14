import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/Navigations/Navigation';
import LoginForm from './src/Components/LoginForm';
import NavigatorTab from './src/Navigations/NavigationTab';
import NavigationDrawe from './src/Navigations/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
    <NavigationDrawe/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
