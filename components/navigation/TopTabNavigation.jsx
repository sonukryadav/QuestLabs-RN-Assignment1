import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Profile, Home } from "../screens"
import { UserBadges, MembershipCard } from "../subComponets/index";


const TopTab = createMaterialTopTabNavigator();


export default function TopTabNavigation() {
    return (
        <TopTab.Navigator tabBar={props => <Profile {...props} />}>
            <TopTab.Screen name="Badges" component={UserBadges} />
            <TopTab.Screen name="MembershipCard" component={MembershipCard} />
        </TopTab.Navigator>
    )
}