import { View, ImageBackground, Image, Text } from 'react-native';
import React from 'react';
import styles from "../styles/UnlockedBadges";
import { badgesImages } from "../../assets/images";

export default function UnlockedBadges({ badgeIcon, title }) {
    return (
        <View style={styles.badgeLayer1}>
            <ImageBackground source={badgesImages.bgWhite} resizeMode={"cover"} style={styles.bgWhiteLayer}>
                <ImageBackground source={badgeIcon} resizeMode={"contain"} style={styles.badgeIconUnder}>
                    <ImageBackground source={badgesImages.bgBlack} resizeMode={"contain"} style={styles.bgBlackLayer} >
                        <Image source={badgesImages.lock} resizeMode={"contain"} style={styles.badgeLock} />
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}