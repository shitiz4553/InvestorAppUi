import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../../src/Theme";
import { Feather } from '@expo/vector-icons';
function FullButton({color,label,handlePress,icon}){
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.container, { backgroundColor: color }]}
      >
        {icon?<Feather style={{marginRight:10}} name={icon} size={20} color="white" />:null}
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );}
export default FullButton;

const styles = StyleSheet.create({
    container: {
        height:55,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:13,
        flexDirection:'row',
    },
    text:{
        fontSize:16,
        fontFamily:Theme.SpaceBold,
        color:'#FFF'
    }
});