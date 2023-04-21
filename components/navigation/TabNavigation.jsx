import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import {Home, Order, Profile } from "../screens";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Order') {
                        iconName = focused ? 'basket' : 'basket-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderRadius:20,
                    height: 70,
                    margin: 5,
                    borderWidth: 1,
                    borderColor:"white",
                },
            })
            }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default TabNavigation;