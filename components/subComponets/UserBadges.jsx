import { View, Text } from 'react-native';
import React from 'react';
import styles from "../styles/UserBadges.js";
import { badgesImages } from "../../assets/images.js";
import { LockedBadges, UnlockedBadges} from "../subComponets"

export default function UserBadges() {
  return (
    <View style={styles.userBadges}>
      <View style={styles.badgeList}>
        <LockedBadges badgeIcon={badgesImages.digitalDevotee} title={"Digital Devotee"} />
        <LockedBadges badgeIcon={badgesImages.pickupMaster} title={"Pickup Master"} />
        <UnlockedBadges badgeIcon={badgesImages.flavourFinder} title={"Flavor Finder"} />
      </View>
      <View style={styles.badgeList}>
        <LockedBadges badgeIcon={badgesImages.foodie} title={"Foodie"} />
        <LockedBadges badgeIcon={badgesImages.followFan} title={"Follow Fan"} />
        <UnlockedBadges badgeIcon={badgesImages.deliveryPro} title={"Delivery Pro"} />
      </View>
    </View>
  )
}