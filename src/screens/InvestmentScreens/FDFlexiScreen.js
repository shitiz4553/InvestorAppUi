import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground
} from "react-native";
import Theme from "../../Theme";
import Header from '../../../components/Header'
import Typo from "../../../components/Typography/Typo";
import InputBox from "../../../components/InputBox";
import Space from "../../../components/Space";
import FDCard from "../../../components/ProductCards/FDCard";
import CheckItem from "../../../components/CheckItem";
import LineBar from "../../../components/LineBar";
import assets from "../../../assets/assets";

function FDFlexiScreen({navigation}){
    return (
      <ImageBackground source={assets.bg} style={styles.container}>
        <Header
          handleIconPress={() => navigation.goBack()}
          leftIcon={"arrow-back"}
          label={"Flexible Investments"}
        />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View style={styles.card}>
              <Typo grey>Currently Invested</Typo>
              <Typo xl>₹ 0</Typo>
              <Space space={15} />
              <InputBox
                hasBtn
                keyboardType={"numeric"}
                maxLength={40}
                placeholder={"Min ₹10,000"}
                btnPlaceholder="Add Funds"
                //handleButtonPress - Use this to add logic to add funds
              />
            </View>
            <Space space={15} />
            <View style={styles.card}>
              <Typo l>Flexi Withdrawals</Typo>
              <Typo grey>You can withdraw upto ₹0</Typo>
              <Space space={15} />
              <InputBox
                hasBtn
                keyboardType={"numeric"}
                maxLength={40}
                placeholder={"Enter Amount"}
                btnPlaceholder="Withdraw"
                //handleButtonPress - Use this to add logic to add funds
              />
            </View>
            <Space space={15} />
            <View style={styles.card}>
              <Typo grey>Your interest earnings @11%p.a</Typo>
              <View style={Theme.align}>
                <Typo xl>₹ 0</Typo>
                <Typo m style={styles.indicator}>
                  ₹ 0 / Day
                </Typo>
              </View>
            </View>
            <Space space={15} />
            <View style={styles.card}>
              <Typo grey>Investment Schedule</Typo>
              <Typo m>No Schedule Available Yet!</Typo>
            </View>
            <Space space={15} />
            <LineBar margin={15} />
            <CheckItem text={"Earn upto 11% per annum"} />
            <CheckItem text={"Minimum Tenure of 12 Months"} />
            <CheckItem text={"Max Tenure of 36 Months"} />
            <CheckItem text={"Min investment of 1 Lakh, max 50 Lakhs"} />
            <CheckItem text={"No TDS on withdrawal"} />
            <LineBar margin={15} />
          </ScrollView>
        </View>
      </ImageBackground>
    );}
export default FDFlexiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  body: {
    flex: 7,
  },
  card: {
    backgroundColor: Theme.cardColor,
    width: "92%",
    borderRadius: 12,
    padding: 15,
  },
  indicator: {
    color: Theme.orangeColor,
    marginLeft: 10,
  },
  strip:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:Theme.lightBackgroundColor,
    width:'100%',
    paddingVertical:10,
    borderRadius:8,
    paddingHorizontal:10
  }
});