import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { KeyboardAvoidWrapper, TopHalf} from "../../components/StyleComponents";
import { styles } from '../../constants/styles';
import { colors } from "../../constants/colors";
import InputForm from '../../components/InputForm';
import MainButton from "../../components/MainButton";



const SignupScreen = () => {
    const [hidpassword, setHidPassword]=useState(true)
    const [google, setGoogle]=useState(true)
    const [user, setUser]=useState({
        email:'',
        names:'',
        password:'',
        confirm_password:''

    })
  return (
    <KeyboardAvoidWrapper>
    <View style={styles.styleContainer}>
        <View style={styles.innerContainer}>
          <TopHalf>
            <Text style={styles.title}>Create account</Text>
          </TopHalf>
            
                <InputForm 
                    label={"Email Address"}
                    icon={"mail-outline"}
                    placeholder="your@site.com"
                    placeholderTextColor={colors.darkGrey}
                    keyboardType="email-address"
                    value={user.email}
                    />
                <InputForm 
                    label={"Names"}
                    icon={"person"}
                    placeholder="Enter your names"
                    placeholderTextColor={colors.darkGrey}
                    value={user.names}/>

                <InputForm 
                    label={"Password"}
                    icon={"lock-closed"}
                    placeholder="* * * * * * * * *"
                    placeholderTextColor={colors.darkGrey}
                    secureTextEntry={hidpassword}
                    // value={userlogin.password}
                    isPassword={true}
                    hidepassword={hidpassword}
                    setHidpassword={setHidPassword}/>
                <InputForm 
                    label={"Confirm Password"}
                    icon={"lock-closed"}
                    placeholder="* * * * * * * * *"
                    placeholderTextColor={colors.darkGrey}
                    secureTextEntry={hidpassword}
                    // value={userlogin.password}
                    isPassword={true}
                    hidepassword={hidpassword}
                    setHidpassword={setHidPassword}/>

                <MainButton text={"Sign Up"} style={{width: '100%'}} />
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 16}}>Already have an account?</Text>
                    <Pressable style={{color:colors.blue, paddingHorizontal: 10}}>
                        <Text style={{fontSize: 16, fontWeight:'bold'}}>Sign In</Text>
                    </Pressable>
                 </View>
                
               
            
        </View>
    </View>
    </KeyboardAvoidWrapper>
  )
}

export default SignupScreen