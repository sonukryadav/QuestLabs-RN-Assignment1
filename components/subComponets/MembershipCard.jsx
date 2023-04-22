import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from '../styles/MembershipCard';
import { membershipCardImages } from "../../assets/images";


const UserLevel = ({ iconName, title }) => {
    return (
        <>
            <View style={styles.item1}>
                <Image source={iconName} resizeMode='contain' style={styles.userLevelIcons} />
                <Text style={styles.userLevelText}>{title}</Text>
            </View>
        </>
    )
}

export default function MembershipCard() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.cardView}>
                <View style={styles.cardView1}>
                    <Image source={membershipCardImages.leftImage} style={styles.leftImage1} />
                </View>
                <View style={styles.cardView2}>
                    <View style={styles.cardTopTextView}>
                        <Text style={styles.cardTopText}>{"The Original Hot Chicken"}</Text>
                    </View>
                    <View style={styles.userLevel}>
                        <UserLevel iconName={membershipCardImages.levelBlack} title={"3 Level"} />
                        <UserLevel iconName={membershipCardImages.xpBlack} title={"300 XP"} />
                        <UserLevel iconName={membershipCardImages.blackEggs} title={"5 Eggs"} />
                    </View>
                    <View style={styles.qrCodeText}>
                        <View style={styles.qrTextView}>
                            <Text style={styles.qrText}>{`Scan the QR Code Now \n to get more details!`}</Text>
                        </View>
                        <View style={styles.qrImgView}>
                            <Image source={membershipCardImages.qrCode} resizeMode='contain' style={styles.qrImg} />
                        </View>
                    </View>
                </View>
                <Image source={membershipCardImages.bgImage} resizeMode='contain' style={styles.cornerImage} />
            </View>
        </SafeAreaView>
    )
}