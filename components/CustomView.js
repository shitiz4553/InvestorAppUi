import React from 'react';
import { KeyboardAvoidingView, StyleSheet,Platform } from "react-native";

const CustomView = ({ children,backgroundColor }) => {
    const keyboardAvoidingBehavior = Platform.OS === 'ios' ? 'padding' : null;
  return (
    <KeyboardAvoidingView style={[styles.container,{
        backgroundColor:backgroundColor
    }]} behavior={keyboardAvoidingBehavior} enabled>
        {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomView;
