import { StyleSheet, Dimensions } from "react-native";
const {width } = Dimensions.get("window");
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cardView: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical:35,
        width: width * 0.95,
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 30,
        elevation:20,
    },
    cardView1: {
        flex: 0,
    },
    leftImage1: {
        width: 100,
        height: 150,
    },
    cardView2: {
        flex: 1,
        marginVertical: 10,
        alignItems: "center",
    },
    cardTopTextView: {
    },
    cardTopText: {
        color: "black",
        fontSize: 15,
        fontWeight: 600
    },
    userLevel: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        width: "65%",
        marginTop: 15,
    },
    item1: {
        flex: 1,
        alignItems: "center",
    },
    userLevelIcons: {
        width: 15,
        height: 15,
    },
    userLevelText: {
        color: "black",
        fontSize: 10,
        fontWeight: 500,
    },
    qrCodeText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    qrTextView: {
        marginRight: 20
    },
    qrText: {
        color: "black",
        fontSize: 9,
        fontWeight: 500
    },
    qrImgView: {
    },
    qrImg: {
        width: 30,
        height: 30,
    },
    cornerImage: {
        position:"absolute",
        width: 100,
        height: 100,
        right: -17,
        bottom:-4,
    }
});

export default styles;