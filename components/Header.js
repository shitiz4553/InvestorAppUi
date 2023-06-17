import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    TouchableOpacity
} from "react-native";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';

function Header({label,rightIcon,handleIconPress,noMargin,leftIcon}){
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            marginTop: noMargin ? 15 : Platform.OS === "android" ? 55 : 0,
            backgroundColor: null,
          },
        ]}
      >
        <View style={styles.innerView}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         {leftIcon ? (
            <TouchableOpacity  onPress={handleIconPress}>
              <Ionicons
                name={leftIcon}
                size={28}
                color={"grey"}
                style={{marginRight:15}}
              />
            </TouchableOpacity>
          ) : <View/>}
          <View>
            <Text
            numberOfLines={1}
              style={[
                styles.title,
                {
                  color: "white" 
                },
              ]}
            >
              {label}
            </Text>
          </View>
         </View>
          {rightIcon ? (
            <TouchableOpacity onPress={handleIconPress}>
              <Ionicons
                name={rightIcon}
                size={28}
                color={"grey"}
              />
            </TouchableOpacity>
          ) : <View/>}
        </View>
      </SafeAreaView>
    );}
export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    innerView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:25,
        justifyContent:'space-between'
    },
    title:{
        fontSize:22,
        fontFamily:Theme.SpaceBold
    },
    subtitle:{
        fontSize:14,
        fontFamily:Theme.PoppinsMedium,
        opacity:0.6,
        marginTop:2
    }
});