import {View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home, Order, Profile } from "../screens";
import TopTabNavigation from './TopTabNavigation';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <View style={{flex:1, backgroundColor:"white"}}>
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
                        borderRadius: 20,
                        height: 70,
                        marginBottom: 2,
                        borderColor: "white",
                        marginHorizontal:15
                    },
                })
                }
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Order" component={Order} />
                <Tab.Screen name="Profile" component={TopTabNavigation} />
            </Tab.Navigator>
        </View>
    );
}

export default BottomTabNavigation;