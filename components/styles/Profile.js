import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor:"white",
    }
});

export default styles;