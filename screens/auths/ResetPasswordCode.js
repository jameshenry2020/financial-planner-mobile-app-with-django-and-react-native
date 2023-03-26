import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TopHalf,  KeyboardAvoidWrapper, IconBg, BottomHalf} from "../../components/StyleComponents";
import { styles } from '../../constants/styles';
import { colors } from "../../constants/colors";
import ResendTimer from '../../components/ResendTimer';
import CodeInputField from '../../components/CodeInputField';
import MainButton from "../../components/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { FONTS } from "../../constants/theme";

const ResetPasswordCode = () => {
    const [code, setCode]=useState("")
    const [pinReady, setPinReady]=useState(false)
    const MAX_CODE_LENGTH=4
    const [verifying, setVerifying]=useState(false)

    //resend timer
  const [timeLeft, setTimeLeft]=useState(null)
  const [targetTime, setTargetTime]=useState(null)
  const [activeResend, setActiveResend]=useState(false)
  const [resendingEmail, setResendingEmail]=useState(false)
  const [resendStatus, setResendStatus]=useState('Resend')
  let resendTimeInterval;


  const triggerTime=(targetTimeInSeconds = 30)=>{
    setTargetTime(targetTimeInSeconds)
    setActiveResend(false)
    finalTime= +new Date() + targetTimeInSeconds * 1000
    resendTimeInterval = setInterval(() => calculateTimeleft(finalTime), 1000);
}

    const calculateTimeleft=(time)=>{
    const diff = time - +new Date();
    if (diff >= 0) {
        setTimeLeft(Math.round(diff / 1000))
    }else{
        clearInterval(resendTimeInterval)
        setActiveResend(true)
        setTimeLeft(null)
    }
    }

    useEffect(() => {
    triggerTime() 
    return () => {
    clearInterval(resendTimeInterval)
    }
    }, [])

  const resendEmail = (triggerTime)=>{
    try{
        setResendingEmail(true)
        //make your api call
        //update resendStatus

        setResendingEmail(false)
        setTimeout(() => {
            setResendStatus('Resend')
            setActiveResend(false)
            triggerTime()
        }, 5000);      
  }catch (error){
    setResendingEmail(false)
    setResendStatus('Failed')
  }
  }

    const submitOtpVerifyCode=()=>{

    }    
  return (
    <KeyboardAvoidWrapper>
        <View style={[styles.styleContainer, {alignItems:'center'}]}>
            <TopHalf>
                <IconBg>
                    <MaterialCommunityIcons name={"key"} size={80} color={colors.primary}/>
                </IconBg>              
            </TopHalf>
            
            <BottomHalf>
            <Text style={{...FONTS.h3, fontWeight:'700', textAlign:'center', marginVertical: 25}}>Enter the 4-digit code sent to your email</Text>
                    <CodeInputField 
                     code={code}
                     setCode={setCode}
                     maxLength={MAX_CODE_LENGTH}
                     setPinReady={setPinReady}/>
                    
                    {!verifying && pinReady && (
                        <View style={{width: '100%', flexDirection:'row', justifyContent:'center'}}>
                        <MainButton text={"Verify"} onPress={submitOtpVerifyCode} style={{width: '100%'}}/>
                         </View>
                     )}
                     {!verifying && !pinReady && (
                        <View style={{width: '100%', flexDirection:'row', justifyContent:'center'}}>
                        <MainButton text={"Verify"} disabled={true}  style={{width: '100%', backgroundColor: colors.lightGrey}}/>
                         </View>
                     )}

                        {verifying && (
                        <View style={{width: '100%', flexDirection:'row', justifyContent:'center'}}>
                            <View style={styles.mbutton}>
                                <ActivityIndicator size={"large"} color={colors.offwhite} />
                            </View>             
                         </View>
                     )}

                    <ResendTimer 
                      activeResend={activeResend}
                      resendingEmail={resendingEmail}
                      resendStatus={resendStatus}
                      resendEmail={resendEmail}
                      timeLeft={timeLeft}
                      targetTime={targetTime}/>
            </BottomHalf>
        </View>
    </KeyboardAvoidWrapper>
      )
    }
    
    export default ResetPasswordCode