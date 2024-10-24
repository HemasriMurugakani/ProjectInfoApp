// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';  // First screen (task overview)
import WireframeDetailsScreen from './src/screens/WireframeScreen';  // Second screen (details)
import FilesScreen from './src/screens/FilesScreen';
import Wireframe from './src/screens/WireframeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}  // Hides the header text
        />
        <Stack.Screen 
          name="FilesScreen" 
          component={FilesScreen} 
          options={{ headerShown: false }}
        />
                <Stack.Screen 
          name="WireframeScreen" 
          component={Wireframe} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
