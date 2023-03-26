import {Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from "../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../constants/colors';

const SubButton = ({text, style, icon, hasIcon, disabled, onPress}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.6} style={[styles.mbutton, style]}>   
      <Text style={styles.btext}>{text}</Text>
      { hasIcon && (
            <Ionicons name={icon}  size={25} color={colors.white}/>
        )}
    </TouchableOpacity>
  )
}

export default SubButton