import {Image, StyleSheet} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../homeScreen/HomeScreen';
import AccountScreen from '../AccountScreen/AccountScreen';
import Images from '../../config/Images';

const Tab = createBottomTabNavigator();

const BottomTabsRoutes = ({route}) => {
  const data = route.params.data;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeScreen') {
            iconName = focused
              ? Images.ic_home_active
              : Images.ic_home_inactive;
          } else if (route.name === 'AccountScreen') {
            iconName = focused
              ? Images.ic_profile_active
              : Images.ic_profile_inactive;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={styles.icon} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 5,
          height: '8%',
          backgroundColor: 'white',
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        initialParams={{data: data}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsRoutes;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
