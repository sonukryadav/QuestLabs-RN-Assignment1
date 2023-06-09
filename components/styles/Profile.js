import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: "white",
        backgroundColor:"#F5F5F5",
    },
    // User profile card - upper half
    scrollView: {

    },
    cardTopView: {
        flexDirection: "row",
        justifyContent: "center",
        padding: width * 0.05,
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 8,
        marginBottom:20,
    },
    girlView: {
        flex: 1,
        borderColor: "teal",
        alignItems:"center"
    },
    girlImage: {
        width: width * 0.5,
        height: 250,
        // backgroundColor: "grey",
    },
    userName: {
        color: "black",
        fontSize: 18,
        fontWeight: 400,
        position: "absolute",
        top: 205,
    },
    userLevel: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        width: "65%",
        marginTop:15,
    },
    item1: {
        flex: 1,
        alignItems: "center",
    },
    userLevelIcons: {
        width: 28,
        height: 28
    },
    userLevelText: {
        color: "black",
        fontSize: 14,
        fontWeight: 500,
        padding:8
    },
    cardBottomView: {
        flexDirection: "row",
        // borderWidth: 1,
        marginTop:10
    },
    badgesView: {
        flex: 0.5,
        // borderWidth: 1,
        justifyContent: "center",
    },
    badgesText: {
        textAlign:"center",
    },
    separatorView: {
        flex: 0,
    },
    separatorText: {
        color: "gray",
        fontSize: 30,
        fontWeight:800
    },
    membershipView: {
        flex: 0.5,
        justifyContent: "center",
    },
    membershipText: {
        textAlign: "center",
    },
    girlRightView: {
        flex: 0,
        // borderWidth: 2,
        borderColor: "black",
    },
});

export default styles;