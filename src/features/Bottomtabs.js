import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
export default function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn === 'Calendar') {
                        iconName = focused ? 'calendar' : 'calendar-outline'
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color}/>

                },
                tabBarActiveTintColor: '#7b2f2d',
                tabBarInactiveTintColor: 'gray'
            })}
            >
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Calendar" component={Calendar}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}