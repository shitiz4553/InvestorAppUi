import React, { useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput,TouchableOpacity } from "react-native";
import Theme from "../Theme";
import Header from "../../components/Header";
import Typo from "../../components/Typography/Typo";
import Space from "../../components/Space";
import FullButton from "../../components/Buttons/FullButton";

function EnterOtpScreen({ navigation }) {
  const inputRefs = useRef([]);

  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Header
        handleIconPress={() => navigation.goBack()}
        label={"Enter Otp"}
        leftIcon={"arrow-back"}
      />
      <View style={styles.body}>
        <ScrollView>
          <Typo m>
            Let’s safe your transfer money our bank. Enter your details to sign
            up.
          </Typo>
          <View style={styles.otpboxesWrapper}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.inputBox}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(text) => {
                  if (text !== "") {
                    focusNextInput(index);
                  }
                }}
                autoFocus={index === 0}
              />
            ))}
          </View>
          <View style={styles.align}>
            <Typo s style={styles.otp}>
              Didn't get the otp yet?
            </Typo>
            <TouchableOpacity>
              <Typo m>Resend</Typo>
            </TouchableOpacity>
          </View>
          <Space space={25} />
          <FullButton
          handlePress={()=>navigation.navigate('VerificationScreen',{
            title:'Congratulations!',
            subtitle:'You are now verified! Click below to continue',
            navTo:'DashboardScreen'
          })}
          color={Theme.lightBackgroundColor} label={"Verify"} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  body: {
    flex: 7,
    paddingHorizontal: 20,
  },
  otpboxesWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  inputBox: {
    width: 42,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginHorizontal: 9,
    marginVertical: 55,
    fontFamily:Theme.SpaceBold
  },
  align: {
    width: "100%",
    alignItems: "center",
  },
  otp:{
    color:'grey'
  }
});

export default EnterOtpScreen;
