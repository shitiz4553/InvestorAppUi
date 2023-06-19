import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Typo from "./Typography/Typo";
import { AntDesign } from '@expo/vector-icons';

const CheckItem = ({text,subtext}) =>{
    return(
      <View style={{flexDirection:'row',alignItems:'center',width:'90%',marginVertical:5}}>
        <AntDesign style={{marginRight:7}} name="check" size={18} color="grey" />
        <View>
        <Typo s light>{text}</Typo>
        {subtext ? <Typo grey s light>{subtext}</Typo> : null}
        </View>
      </View>
    )
}
export default CheckItem;
