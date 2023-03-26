import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { TopHalf,  KeyboardAvoidWrapper, IconBg} from "../../components/StyleComponents";
import { styles } from '../../constants/styles';
import { colors } from "../../constants/colors";
import InputForm from '../../components/InputForm';
import MainButton from "../../components/MainButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { FONTS } from "../../constants/theme";

const ForgetPassword = () => {
    const [email, setEmail]=useState("")
    
    const handleOnSubmit=()=>{

    }
    
  return (
    <KeyboardAvoidWrapper>
    <View style={styles.styleContainer}>
        <View style={styles.innerContainer}>
            <TopHalf>

                <IconBg>
                    <MaterialCommunityIcons name={"key"} size={80} color={colors.primary}/>
                </IconBg>
                <Text style={{...FONTS.h3, fontWeight:'700', marginVertical: 25}}>Enter your email</Text>
            </TopHalf>
            
                <InputForm 
                    label={"Email Address"}
                    icon={"mail-outline"}
                    placeholder="your@site.com"
                    placeholderTextColor={colors.darkGrey}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}/>

               

                <MainButton text={"Submit"} style={{width: '100%'}} />
               
        </View>
    </View>
    </KeyboardAvoidWrapper>
      )
    }
    
    export default ForgetPassword