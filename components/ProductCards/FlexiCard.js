import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import assets from "../../assets/assets";
import Theme from "../../src/Theme";
import Typo from "../Typography/Typo";
import LineBar from "../LineBar"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


function FlexiCard(){

  const navigation = useNavigation();
    return(
    <View style={styles.container}>
    <View style={styles.header}>
    <View style={Theme.align}>
    <Image source={assets.roi} style={styles.img} />
    <Typo l>Flexible Investments</Typo>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('FDFlexiScreen')}  hitSlop={{top:25,left:25,right:25,bottom:25}}>
    <AntDesign name="arrowright" size={20} color="white" />
    </TouchableOpacity>
    </View>
    <LineBar margin={15}/>
    <CheckItem text={'Earn upto 11% per annum'} />
    <CheckItem text={'Minimum Tenure of 12 Months'} />
    <CheckItem text={'Max Tenure of 36 Months'} />
    <CheckItem text={'Min investment of 1 Lakh, max 50 Lakhs'} />
    <CheckItem text={'No TDS on withdrawal'} />
    </View>
    )}
export default FlexiCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    padding: 20,
    borderRadius: 10,
    marginBottom:20
  },
  img: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    marginRight: 5,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});



const CheckItem = ({text}) =>{
    return(
      <View style={{flexDirection:'row',flex:1,alignItems:'center',width:'90%',marginBottom:10}}>
        <AntDesign style={{marginRight:7}} name="check" size={18} color="grey" />
        <Typo s light>{text}</Typo>
      </View>
    )
}