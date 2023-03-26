import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { styles } from "../constants/styles";
import Ionicons  from "react-native-vector-icons/Ionicons"
import { colors } from "../constants/colors";

const InputForm = ({label, icon, isPassword,hidepassword,setHidpassword, ...props}) => {
    
  return (
    <View style={{flex:1, width:'100%'}}>
        <View style={styles.inputIcon}>
            <Ionicons name={icon} size={30} color={colors.primary} />
        </View>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={styles.input} {...props} />
         {isPassword && (
            <TouchableOpacity activeOpacity={0.6} style={styles.eyeIcon} onPress={()=> setHidpassword(!hidepassword)}>
                <Ionicons name={hidepassword ? "eye-off" : "eye"} size={30} color={colors.primary}/>
            </TouchableOpacity>
         )}
    </View>
  )
}

export default InputForm