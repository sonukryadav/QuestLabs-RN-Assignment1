import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    // User profile card - bottom half
    userBadges: {
        // borderWidth: 2,
        // borderColor: "green",
    },
    badgeList: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10
    },
});

export default styles;