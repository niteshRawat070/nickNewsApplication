import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const loadFonts = () => {
  return Font.loadAsync({
    'PTSerif': require('./assets/fonts/PTSerif-Regular.ttf'),
    // './assets/fonts/Ubuntu-Regular.ttf'
    'PTSerif-Bold': require('./assets/fonts/PTSerif-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
});
