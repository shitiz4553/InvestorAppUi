import React from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";
import Theme from "../Theme";
import Logo from "../../components/Logo";
import Typo from "../../components/Typography/Typo";
import FullButton from '../../components/Buttons/FullButton'
import Space from '../../components/Space'

function EntryScreen({navigation}){
    return(
    <View style={styles.container}>
       <View style={styles.logoWrapper}>
       <Logo size={150} />
       </View>
       <View style={styles.contentWrapper}>
        <Typo xl>Welcome to PayUp finance mobile app</Typo>
        <Typo m style={styles.sub}>Welcome to PayUp finance mobile app</Typo>
        <Space space={25}/>
        <FullButton
        icon="mail"
        label={'Sign up with Email'}
        color={Theme.lightBackgroundColor}
        handlePress={()=>navigation.navigate('CreateAccountScreen')}
        />
       </View>
    </View>
    )}
export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sub:{
    marginTop:15,
    color:Theme.lightTextColor,
    fontFamily:Theme.SpaceLight
  }
});