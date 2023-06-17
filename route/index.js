import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EntryScreen from '../src/screens/EntryScreen';
import CreateAccountScreen from '../src/screens/CreateAccountScreen';
import EnterOtpScreen from '../src/screens/EnterOtpScreen';
import VerificationScreen from '../src/screens/VerificationScreen';
import DashboardScreen from '../src/screens/DashboardScreen';
import DrawerScreen from '../src/screens/DrawerScreen';
import FDFlexiScreen from '../src/screens/InvestmentScreens/FDFlexiScreen';
import FDInvestmentScreen from '../src/screens/InvestmentScreens/FDInvestmentScreen';

const Stack = createStackNavigator();

export default function MyStack() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="EntryScreen" component={EntryScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="CreateAccountScreen" component={CreateAccountScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="EnterOtpScreen" component={EnterOtpScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="VerificationScreen" component={VerificationScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="DashboardScreen" component={DashboardScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="FDFlexiScreen" component={FDFlexiScreen}/>
            <Stack.Screen options={{ headerShown: false }} name="FDInvestmentScreen" component={FDInvestmentScreen}/>
            <Stack.Screen options={{ headerShown: false , gestureDirection:'horizontal'}} name="DrawerScreen" component={DrawerScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    
  }
  
  