import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigator } from '../components';
import { Activities, Explore, Home, Profile, Reels } from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Activities" component={Activities} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
