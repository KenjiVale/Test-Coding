import BottomTabsRoutes from './BottomTabsRoutes';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../login/LoginScreen';
import JobDetailScreen from '../jobDetail/JobDetailScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomTabsRoutes" component={BottomTabsRoutes} />
        <Stack.Screen name="JobDetailScreen" component={JobDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
