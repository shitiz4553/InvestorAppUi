import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground
} from "react-native";
import Theme from "../src/Theme";
import Swiper from 'react-native-swiper'

const windowHeight = Dimensions.get('window').height

const img1 = "https://www.wolvessummit.com/hubfs/WHY-STARTUPS-DECLINE-YOUR-INVESTMENT-OFFERS.png"
const img2 = "https://waipa.org/waipa-content/uploads/new_member_6-01-scaled.jpg"
const img3 = "https://www.ocoglobal.com/wp-content/themes/oco/innovation/winner.jpg"

function BannerView({navigation}){
    return (
      <View style={styles.container}>
        <Swiper dotColor="grey" activeDotColor="white" paginationStyle={styles.pg} showsPagination={true} autoplay={true} style={styles.wrapper} showsButtons={false}>
          <ImageBackground imageStyle={styles.ref} source={{uri:img3}} style={styles.slide1}>
          </ImageBackground>
          <ImageBackground imageStyle={styles.ref} source={{uri:img2}}  style={styles.slide2}>
          </ImageBackground>
          <ImageBackground imageStyle={styles.ref} source={{uri:img1}}  style={styles.slide3}>
          </ImageBackground>
        </Swiper>
      </View>
    );}
export default BannerView;

const styles = StyleSheet.create({
  container: {
    height: windowHeight / 6,
    backgroundColor: Theme.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:20,
  },
  fantasyText: {
    fontSize: 25,
    fontFamily: Theme.PoppinsBold,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 55,
    marginTop: 35,
  },
  slide1: {
    flex: 1,
    borderRadius:8
  },
  slide2: {
    flex: 1,
    borderRadius:8
  },
  slide3: {
    flex: 1,
    borderRadius:8
  },
  pg:{
    bottom:-25
  },
  ref:{
    borderRadius:8
  }
});