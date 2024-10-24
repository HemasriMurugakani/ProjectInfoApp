// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'  // First screen (task overview)
import WireframeDetailsScreen from './src/screens/WireframeDetailsScreen';  // Second screen (details)

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
          name="WireframeDetails" 
          component={WireframeDetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
