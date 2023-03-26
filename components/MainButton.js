import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from "../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../constants/colors';

const MainButton = ({text, style, icon, hasIcon, disabled, onPress}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.6} style={[styles.mbutton, style]}>
        { hasIcon && (
            <Ionicons name={icon}  size={25} color={colors.white}/>
        )}
      <Text style={styles.btext}>{text}</Text>
      
    </TouchableOpacity>
  )
}

export default React.memo(MainButton)