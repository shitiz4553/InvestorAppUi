import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Typo from "../Typography/Typo";
import Theme from "../../src/Theme";

function CardInfoText({paragraph,title}){
    return(
    <View style={styles.container}>
       <View style={styles.greycontainer}>
       <Typo style={{marginBottom:5}}>{title}</Typo>
       <Typo s light grey>{paragraph}</Typo>
       </View>
    </View>
    )}
export default CardInfoText;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  greycontainer:{
    backgroundColor:Theme.cardColor,
    borderRadius:12,
    padding:15,
  }
});