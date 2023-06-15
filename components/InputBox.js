import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from "react-native";
import Theme from "../src/Theme";
import { Feather } from '@expo/vector-icons';

function InputBox({
  secureTextEntry,
  multiline,
  placeholder,
  leftIcon,
  keyboardType,
  maxLength,
  onChangeText,
  value,
}) {
  return (
    <View>
      <View
        style={[
          styles.container,
          ,
          {
            height: multiline ? 80 : 55,
            alignItems: multiline ? "flex-start" : "center",
          },
        ]}
      >
        {leftIcon ? (
          <Feather
            style={{ marginRight: 10 }}
            name={leftIcon}
            size={20}
            color={'white'}
          />
        ) : null}
        <TextInput
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
          value={value}
          multiline={multiline ? multiline : false}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType={keyboardType}
          placeholderTextColor={Theme.lightTextColor}
          style={[styles.input]}
          placeholder={placeholder}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
export default InputBox;

const styles = StyleSheet.create({
    container: {
       width:'100%',
       alignItems:'center',
       paddingHorizontal:15,
       flexDirection:'row',
       paddingVertical:7,
       borderColor:'white',
       borderRadius:14,
       borderWidth:0.5
    },
    input:{
        fontSize:15,
        width:'100%',
        color:'white',
        fontFamily:Theme.SpaceBold
    },
});