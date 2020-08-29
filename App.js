import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {AppearanceProvider} from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Containers
import {HomeStackScreen, ProfileStackScreen} from './app/containers/MainStack';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppearanceProvider>
        <StatusBar barStyle="dark-content" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </AppearanceProvider>
    </NavigationContainer>
  );
}

export default App;
