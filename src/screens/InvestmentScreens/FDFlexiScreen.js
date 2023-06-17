import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Theme from "../../Theme";

function FDFlexiScreen({navigation}){
    return(
    <View style={styles.container}>
        <Text>FDFlexiScreen</Text>
    </View>
    )}
export default FDFlexiScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    }
});