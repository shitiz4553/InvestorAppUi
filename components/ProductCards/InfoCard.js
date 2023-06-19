import React from "react";
import { 
    View,
    StyleSheet,
    Image
} from "react-native";
import Theme from "../../src/Theme";
import Typo from "../Typography/Typo";
import { LinearGradient } from 'expo-linear-gradient';
import CheckItem from "../CheckItem";
import Space from "../Space";
function InfoCard({img,title,subtitle}){
    return (
      <LinearGradient
        colors={["#100d33", "black",]}
        style={styles.container}
      >
        <Typo l>Our legacy at Lendbox</Typo>
        <Space space={15}/>
        <CheckItem subtext="Assets under management" text={'1200+ Cr'} />
        <Space space={5}/>
        <CheckItem text={'7 Years'} subtext={'Wealth building experience'} />
        <Space space={5}/>
        <CheckItem text={'10,000+'} subtext={'Happy Investors'} />
        <Space space={5}/>
        <CheckItem text={'24+'} subtext={'Estemeed Partners'} />
        <Space space={5}/>
        <CheckItem text={'100%'} subtext={'Withdrawals honoured within 24 hours'} />
      </LinearGradient>
    );}
export default InfoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardColor,
    padding: 20,
    minHeight:250
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