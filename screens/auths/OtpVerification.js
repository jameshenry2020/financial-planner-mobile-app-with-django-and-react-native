import { View, Text, StatusBar } from "react-native";
import React,{useState, useEffect} from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import { BottomHalf, IconBg, KeyboardAvoidWrapper, TopHalf,  } from "../../components/StyleComponents";
import { styles } from "../../constants/styles";
import { colors } from "../../constants/colors";
import CodeInputField from "../../components/CodeInputField";
import MainButton from "../../components/MainButton";
import { ActivityIndicator } from "react-native/Libraries/Components/ActivityIndicator/ActivityIndicator";
import ResendTimer from "../../components/ResendTimer";
import VerificationModal from "../../components/VerificationModal";

const OtpVerification=()=>{
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

  //modal 
  const [modalVisible, setModalVisible]=useState(false)
  const [verifySuccess, setVerifySuccess]=useState(false)
  const [requestMessage, setRequestMessage]=useState("")

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
  
  const resendEmail = ()=>{

  }

  const submitOtpVerifyCode= async()=>{

  }
  // persist login after verification
  const persistloginAfterVerification= async()=>{

  }
    return (
        <KeyboardAvoidWrapper>
            <View style={[styles.styleContainer, {alignItems:'center'}]}>
                <TopHalf>
                    <IconBg>
                    <Ionicons name={"lock-closed-outline"} size={80} color={colors.primary}/>
                    </IconBg>
                </TopHalf>
                <BottomHalf>
                    <Text style={[styles.title, {fontSize: 25}]}>Account  Verification</Text>
                    <Text style={{fontSize: 16}}>please enter th 4-digit code sent to </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16, textAlign:'center'}}>testemail@yoursite.com</Text>

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

                      <VerificationModal 
                        modalVisible={modalVisible}
                        successful={verifySuccess}
                        setModalVisible={setModalVisible}
                        requestMessage={requestMessage}
                        persistloginAfterVerification={persistloginAfterVerification}/>
                     
                </BottomHalf>
            </View>
        </KeyboardAvoidWrapper>
    )
}

export default OtpVerification