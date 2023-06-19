import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Theme from "../Theme";
import Typo from "../../components/Typography/Typo";
import Space from "../../components/Space";
import { Ionicons } from '@expo/vector-icons';
import BannerView from "../../components/BannerView";
import FDCard from "../../components/ProductCards/FDCard";
import FlexiCard from "../../components/ProductCards/FlexiCard";
import ClickableCard from "../../components/ProductCards/ClickableCard";
import assets from "../../assets/assets";
import InfoCard from "../../components/ProductCards/InfoCard";
import CardInfoText from "../../components/ProductCards/CardInfoText";

function DashboardScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View style={styles.innerHeader}>
          <View>
            <Typo xl>Hello There!</Typo>
            <Typo m grey>
              Start your investment journey now!
            </Typo>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("DrawerScreen")}>
            <Ionicons name="menu" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BannerView />
          <Space space={25} />
          <View style={styles.wrapper}>
            <Typo l>Investment Options</Typo>
            <Space space={7} />
            <Typo m grey>
              Explore different investment options and pick the one that fit the
              best for you!
            </Typo>
            <Space space={15} />
            <FDCard />
            <FlexiCard />
            <ClickableCard
              //handlePress - use this to execute the action
              img={assets.helpdesk}
              title={"Any questions? Reach out"}
              subtitle={
                "Feel free to get in touch with our team related to all your questions!"
              }
            />
          </View>
          <Space space={5} />
          <InfoCard
            img={assets.helpdesk}
            title={"Any questions? Reach out"}
            subtitle={
              "Feel free to get in touch with our team related to all your questions!"
            }
          />
          <Space space={15} />
          <Typo l style={{ marginLeft: 20, marginBottom: 15 }}>
            How it works?
          </Typo>
          <CardInfoText
            title="Due diligence"
            paragraph="Lorem ipsum this is a sample text that goes here you can easily change this and replace it with your origianl text."
          />
          <Space space={15} />
          <CardInfoText
            title="Partner Assessment"
            paragraph="We allow so many things , Lorem ipsum this is a sample text that goes here you can easily change this and replace it with your origianl text."
          />
          <Space space={55} />
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
  header: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 55 : 0,
    backgroundColor: null,
  },
  body:{
    flex:7,
  },
  innerHeader:{
    flex:1,
    padding:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  wrapper:{
    padding:20
  }
});

export default DashboardScreen;
