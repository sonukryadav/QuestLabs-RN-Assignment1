import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/Profile';
import Ionicons from "react-native-vector-icons/Ionicons";
import { images } from "../../assets/images";


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


export default function Profile() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
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
                                <TouchableOpacity>
                                    <Text style={styles.badgesText}>{"BADGES"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.separatorView}>
                                <Text style={styles.separatorText}>{" | "}</Text>
                            </View>
                            <View style={styles.membershipView}>
                                <TouchableOpacity>
                                    <Text style={styles.membershipText}>{"MEMBERSHIP CARD"}</Text>
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