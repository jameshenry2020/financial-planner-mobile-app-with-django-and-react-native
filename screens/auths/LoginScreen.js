import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { TopHalf,  KeyboardAvoidWrapper} from "../../components/StyleComponents";
import { styles } from '../../constants/styles';
import { colors } from "../../constants/colors";
import InputForm from '../../components/InputForm';
import MainButton from "../../components/MainButton";
import Seperator from '../../components/Seperator';

const LoginScreen = () => {
    const [hidpassword, setHidPassword]=useState(true)
    const [google, setGoogle]=useState(true)
    const [userlogin, setUserLogin]=useState({
        email:'',
        password:''
    })
  return (
    <KeyboardAvoidWrapper>
    <View style={styles.styleContainer}>
        <View style={styles.innerContainer}>
            <TopHalf>
                <Text style={styles.title}>Account Login</Text>
            </TopHalf>
            
                <InputForm 
                    label={"Email Address"}
                    icon={"mail-outline"}
                    placeholder="your@site.com"
                    placeholderTextColor={colors.darkGrey}
                    keyboardType="email-address"
                    value={userlogin.email}/>

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

                <MainButton text={"Login"} style={{width: '100%'}} />
                <Seperator text={"Or Sign Up with "}/>
                <MainButton text={"Sign In with Google"} hasIcon={google} icon={"logo-google"} style={{width:'100%', flexDirection:'row', justifyContent: 'center'}} />
                 <View style={{flexDirection:'row', width: '100%', justifyContent: 'space-between'}}>
                    <View>
                       <Text style={{fontSize: 14, fontWeight:'600', color:colors.blue,}} onPress={()=>{}}>Forget Password</Text> 
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 14}}>New account?</Text>
                    <Pressable style={{ paddingHorizontal: 8}} onPress={()=>{}}>
                        <Text style={{color:colors.blue, fontWeight:'600'}}>Sign Up</Text>
                    </Pressable>
                    </View>
                    
                 </View>
        </View>
    </View>
    </KeyboardAvoidWrapper>
  )
}

export default LoginScreen