import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/AppRoutes';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <AppRoutes style={{
        position: 'absolute'
      }}/>
    </View>
  );
}