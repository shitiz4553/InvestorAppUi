import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Theme from "../Theme";
import Header from "../../components/Header";
import Typo from "../../components/Typography/Typo";
import Space from "../../components/Space";
import InputBox from "../../components/InputBox";
import FullButton from "../../components/Buttons/FullButton";

function CreateAccountScreen({navigation}){
    return (
      <View style={styles.container}>
        <Header
          handleIconPress={() => navigation.goBack()}
          leftIcon={"arrow-back"}
        />
        <View style={styles.body}>
          <ScrollView>
            <Typo style={styles.title}>Create {"\n"}your Account</Typo>
            <Space space={15} />
            <Typo m>
              Let’s safe your transfer money our bank. Enter your details to sign up.
            </Typo>
            <Space space={35} />
            <InputBox leftIcon={"user"} placeholder={"Full Name"} />
            <Space space={20} />
            <InputBox leftIcon={"mail"} placeholder={"Your email"} />
            <Space space={20} />
            <InputBox
              error="Please enter the password that includes symbol" //sample
              secureTextEntry={true}
              leftIcon={"lock"}
              placeholder={"Password"}
            />
            <Space space={20} />
            <InputBox
              secureTextEntry={true}
              leftIcon={"lock"}
              placeholder={"Confirm Password"}
            />
            <Space space={35} />
            <FullButton
              handlePress={() => navigation.navigate("EnterOtpScreen")}
              color={Theme.lightBackgroundColor}
              label={"Sign In"}
            />
            <View style={styles.align}>
              <Typo s style={styles.otp}>
                Already have an account?
              </Typo>
              <TouchableOpacity>
                <Typo m>Login</Typo>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );}
export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  body: {
    flex: 7,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
  },
  align: {
    width: "100%",
    alignItems: "center",
    marginTop:25
  },
  otp:{
    color:'grey'
  }
});