import React from "react";
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Theme from "../../src/Theme";
import Typo from "../Typography/Typo";

function ClickableCard({img,title,subtitle,handlePress}){
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={img} style={styles.img} />
      </View>
      <View style={styles.contentWrapper}>
        <Typo>{title}</Typo>
        <Typo light s grey>
          {subtitle}
        </Typo>
      </View>
    </TouchableOpacity>
  );
}
export default ClickableCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardColor,
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
  },
  iconWrapper: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: "85%",
    paddingHorizontal:15
  },
  img:{
    height:40,
    width:40,
    resizeMode:'contain'
  }
});