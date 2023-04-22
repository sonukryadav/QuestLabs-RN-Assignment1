import { View, ImageBackground, Image, Text } from 'react-native';
import React from 'react';
import styles from "../styles/LockedBadge";
import { badgesImages } from "../../assets/images";

export default function LockedBadges({badgeIcon, title}) {
    return (
        <View style={styles.badgeLayer1}>
            <ImageBackground source={badgesImages.bgWhite} resizeMode={"cover"} style={styles.bgWhiteLayer}>
                <ImageBackground source={badgesImages.bgPink} resizeMode={"contain"} style={styles.bgPinkLayer}>
                    <Image source={badgeIcon} resizeMode='contain' style={styles.badgeType1} />
                </ImageBackground>
            </ImageBackground>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}