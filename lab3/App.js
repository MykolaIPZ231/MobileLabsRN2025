import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GameProvider } from './context/GameContext';
import AppNavigator from './navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GameProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GameProvider>
    </GestureHandlerRootView>
  );
}