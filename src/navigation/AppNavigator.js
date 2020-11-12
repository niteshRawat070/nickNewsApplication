//configuration for our navigator
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AboutScreen from '../screens/AboutScreen';

import FavoritesScreen from "../screens/FavoritesScreen";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <MaterialIcons name='menu' size={30} onPress={() => { navigation.openDrawer() }} style={{ paddingLeft: 10 }} />

    );
}

function TabsNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = 'home'
                    } else if (route.name == 'Favorites') {
                        iconName = 'favorite'
                    }
                    return <MaterialIcons name={iconName} size={24} />
                }
            })}
        >
            <Tabs.Screen name='Home' component={HomeNavigator} />
            <Tabs.Screen name='Favorites' component={FavoritesNavigator} />

        </Tabs.Navigator>
    );
}

function HomeNavigator() {
    return (
        <Stack.Navigator
        // screenOptions={{
        //     headerLeft: () => <HeaderLeft />
        // }}
        >
            <Stack.Screen
                name='NewsList'
                component={NewsListScreen}
                options={{ title: 'All News', headerTitleAlign: 'center', headerLeft: () => <HeaderLeft /> }}
            />
            <Stack.Screen
                name='NewsDetails'
                component={NewsDetailScreen}
                options={{ title: 'News Details' }}
            />
        </Stack.Navigator>
    );
}
function FavoritesNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}>
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}
function AboutNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <HeaderLeft />
        }}>
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}


function AppNavigator(props) {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='News' component={TabsNavigator} />
                <Drawer.Screen name='About' component={AboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AppNavigator;