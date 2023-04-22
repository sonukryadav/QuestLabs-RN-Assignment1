import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState} from 'react';
import styles from '../styles/Profile';
import Ionicons from "react-native-vector-icons/Ionicons";
import { images } from "../../assets/images";
import { badgesImages } from "../../assets/images";
import { LockedBadges, UnlockedBadges } from "../subComponets";
import { useNavigation} from "@react-navigation/native";


const UserLevel = ({ iconName, title}) => {

    return (
        <>
            <View style={styles.item1}>
                <Image source={iconName} resizeMode='contain' style={styles.userLevelIcons} />
                <Text style={styles.userLevelText}>{title}</Text>
            </View>
        </>
    )
}


export default function Profile({ state, navigation }) {
    const moveTo = (where) => {
        navigation.navigate(where);
        console.log(where);
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {/* User profile card - upper half */}
                <View style={styles.cardTopView}>
                    <View style={styles.girlView}>
                        <Image source={images.girl} resizeMode='contain' style={styles.girlImage} />
                        <Text style={styles.userName}>{"Anna Smith"}</Text>
                        <View style={styles.userLevel}>
                            <UserLevel iconName={images.xpRed} title={"300 XP"} />
                            <UserLevel iconName={images.levelRed} title={"3 Level"} />
                            <UserLevel iconName={images.eggsRed} title={"5 Eggs"} />
                        </View>
                        <View style={styles.cardBottomView}>
                            <View style={styles.badgesView}>
                                <TouchableOpacity onPress={() => moveTo("Badges")}>
                                    <Text style={[styles.badgesText, {color: state.index==0 ? "red" : "grey"}]}>{"BADGES"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.separatorView}>
                                <Text style={styles.separatorText}>{" | "}</Text>
                            </View>
                            <View style={styles.membershipView}>
                                <TouchableOpacity onPress={() => moveTo("MembershipCard")}>
                                    <Text style={[styles.membershipText, { color: state.index == 1 ? "red" : "grey" }]}>{"MEMBERSHIP CARD"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.girlRightView}>
                        <Ionicons name="settings-outline" size={30} color="black" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}