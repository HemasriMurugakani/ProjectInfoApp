// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native'; // Import StatusBar
import HomeScreen from './src/screens/HomeScreen';
import FilesScreen from './src/screens/FilesScreen';
import WireframeScreen from './src/screens/WireframeScreen';
import store from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> 
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#ffffff' }, 
            headerTintColor: '#000', 
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              listeners: {
                focus: () => StatusBar.setBarStyle('dark-content'),
                blur: () => StatusBar.setBarStyle('light-content'),
              },
            }}
          />
          <Stack.Screen
            name="FilesScreen"
            component={FilesScreen}
            options={{
              headerShown: false,
              title: 'Files',
              headerStyle: { backgroundColor: '#f0f0f0' },
              headerTintColor: '#000', 
              listeners: {
                focus: () => StatusBar.setBarStyle('dark-content'),
                blur: () => StatusBar.setBarStyle('light-content'),
              },
            }}
          />
          <Stack.Screen
            name="WireframeScreen"
            component={WireframeScreen}
            options={{
              headerShown: false,
              title: 'Wireframe',
              headerStyle: { baackgroundColor: '#6200ee' }, 
              headerTintColor: '#fff',
              listeners: {
                focus: () => StatusBar.setBarStyle('light-content'),
                blur: () => StatusBar.setBarStyle('dark-content'),
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
