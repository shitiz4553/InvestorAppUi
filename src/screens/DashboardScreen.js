import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Theme from "../Theme";
import Header from "../../components/Header";
import Typo from "../../components/Typography/Typo";
import Space from "../../components/Space";
import FullButton from "../../components/Buttons/FullButton";
import assets from "../../assets/assets";

function DashboardScreen({ navigation }) {


  return (
    <View style={styles.container}>
   
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

});

export default DashboardScreen;
