import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Theme from "../Theme";
import Header from "../../components/Header";


function DrawerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        label={"Your Profile"}
        handleIconPress={() => navigation.goBack()}
        leftIcon={"arrow-back"}
      />
      <View style={styles.body}>
      <ScrollView>
        
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  body:{
    flex:7,
  }
});

export default DrawerScreen;
