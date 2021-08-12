import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from './utils/styles';

import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';
import GamingScreen from './screens/GamingScreen';
import WatchScreen from './screens/WatchScreen';
import NotificationScreen from './screens/NotificationScreen';
import MenuScreen from './screens/MenuScreen';

import HomeIcon from './icons/HomeIcon';
import GroupIcon from './icons/GroupIcon';
import WatchIcon from './icons/WatchIcon';
import PlayIcon from './icons/PlayIcon';
import BellIcon from './icons/BellIcon';
import MenuIcon from './icons/MenuIcon';

import AppHeader from './ui/AppHeader';
import SearchScreen from './screens/SearchScreen';

const Tab = createMaterialTopTabNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <AppHeader />
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarStyle: {
            height: 70,
            justifyContent: 'center',
            backgroundColor: colors.primaryBackground,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <HomeIcon color={focused ? colors.blue : undefined} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="GroupScreen"
          component={GroupsScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <GroupIcon color={focused ? colors.blue : undefined} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="WatchScreen"
          component={WatchScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <WatchIcon color={focused ? colors.blue : undefined} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="GamingScreen"
          component={GamingScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <PlayIcon color={focused ? colors.blue : undefined} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <View style={styles.badge}>
                  <Text style={styles.boldText}>3</Text>
                </View>
                <BellIcon color={focused ? colors.blue : undefined} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconContainer}>
                <MenuIcon color={focused ? colors.blue : undefined} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  badge: {
    backgroundColor: colors.crimson,
    width: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 1,
  },

  boldText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
