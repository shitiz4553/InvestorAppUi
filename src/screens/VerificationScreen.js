import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Theme from "../Theme";
import Typo from "../../components/Typography/Typo";
import Space from "../../components/Space";
import FullButton from "../../components/Buttons/FullButton";
import assets from "../../assets/assets";

function VerificationScreen({ navigation,route }) {

  const { title, subtitle ,navTo} = route.params;

  return (
    <View style={styles.container}>
     <View style={styles.roundBox}>
        <Image source={assets.congo} style={styles.img} />
        <Space space={15}/>
        <Typo xl>{title}</Typo>
        <Space space={5}/>
        <Typo m style={styles.subtitle}>{subtitle}</Typo>
        <Space space={35}/>
        <FullButton 
        color={'#555555'}
        label="Proceed"
        handlePress={()=>navigation.navigate(navTo)}
        />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  roundBox: {
    width: "90%",
    height: "35%",
    backgroundColor: '#222222',
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    paddingHorizontal:20
  },
  img: {
    height: 122,
    width: 122,
    resizeMode: "contain",
  },
  subtitle:{
    fontFamily:Theme.SpaceLight,
    color:'grey',
    textAlign:'center'
  }
});

export default VerificationScreen;
