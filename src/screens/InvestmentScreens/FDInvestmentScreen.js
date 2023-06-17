import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Theme from "../../Theme";

function FDInvestmentScreen({navigation}){
    return(
    <View style={styles.container}>
        <Text>FDInvestmentScreen</Text>
    </View>
    )}
export default FDInvestmentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.backgroundColor
    }
});