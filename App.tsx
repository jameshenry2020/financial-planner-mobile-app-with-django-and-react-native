import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import RootTabs from './navigations/tabs/RootTabs';
import { WelcomeScreen, LoginScreen, SignupScreen, ResetPasswordCode, ResetPasswordScreen, OtpVerification, ForgetPassword} from "./screens";







function App(){
  return (
    <>
      {/* <WelcomeScreen/> */}
      {/* <LoginScreen /> */}
      {/* <ForgetPassword /> */}
      {/* <ResetPasswordCode/> */}
      <ResetPasswordScreen />
      {/* <SignupScreen /> */}
       {/* <OtpVerification/> */}
       {/* <RootTabs/> */}
    </>
  );
}

const styles = StyleSheet.create({
 
 
});

export default App;
