import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { TopHalf,  KeyboardAvoidWrapper} from "../../components/StyleComponents";
import { styles } from '../../constants/styles';
import { colors } from "../../constants/colors";
import InputForm from '../../components/InputForm';
import MainButton from "../../components/MainButton";


const ResetPasswordScreen = () => {
    const [hidpassword, setHidPassword]=useState(true)
    const [userpassword, setUserPassword]=useState({
        password1:'',
        password2:''
    })
    //processing submiting
    const [isSubmiting, setIsSubmiting]=useState(false)

  return (
    <KeyboardAvoidWrapper>
    <View style={styles.styleContainer}>
        <View style={styles.innerContainer}>
            <TopHalf>
                <Text style={styles.title}>Enter your New Password</Text>
            </TopHalf>

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

                        {!isSubmiting && (
                        <View style={{width: '100%', flexDirection:'row', justifyContent:'center'}}>
                        <MainButton text={"Submit"} style={{width: '100%'}}/>
                         </View>
                     )}
                     
                        {isSubmiting && (
                        <View style={{width: '100%', flexDirection:'row', justifyContent:'center'}}>
                            <View style={styles.mbutton}>
                                <ActivityIndicator size={"large"} color={colors.offwhite} />
                            </View>             
                         </View>
                     )}
               
        </View>
    </View>
    </KeyboardAvoidWrapper>
  )
}

export default ResetPasswordScreen