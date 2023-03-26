import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, OrdersScreen, SettingsScreen } from "../../screens";

const Tab = createBottomTabNavigator()

const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
            screenOptions={{
                tabBarStyle:{
                    height:80,
                    backgroundColor:'blue'
                },
                
            }}>
          <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
                />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }} />
          <Tab.Screen 
            name="Orders" 
            component={OrdersScreen}
            options={{
                tabBarLabel: 'Orders',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cart-plus" color={color} size={26} />
                ),
              }}
                />
                <Tab.Screen 
                  name="Settings" 
                  component={SettingsScreen}
                  options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="tune" color={color} size={26} />
                    ),
                  }}
                        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootTabs

