import React from "react";
import { 
    Image
} from "react-native";
import assets from "../assets/assets";

function Logo({size}){
    return (
      <Image
        source={assets.logo}
        style={{ height: size, width: size, resizeMode: "contain" }}
      ></Image>
    );}
export default Logo;
