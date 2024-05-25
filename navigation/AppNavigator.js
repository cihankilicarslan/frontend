import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import UserManagementScreen from '../screens/UserManagementScreen';
import QrCodeScannerScreen from '../screens/QrCodeScannerScreen';
import QrCodeGeneratorScreen from '../screens/QrCodeGeneratorScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="UserManagement" component={UserManagementScreen} />
        <Stack.Screen name="QrCodeScanner" component={QrCodeScannerScreen} />
        <Stack.Screen name="QrCodeGenerator" component={QrCodeGeneratorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
