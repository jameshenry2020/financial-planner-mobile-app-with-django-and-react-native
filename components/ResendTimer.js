import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../constants/styles'
import { colors } from '../constants/colors'

const ResendTimer = ({activeResend, resendingEmail, resendEmail, resendStatus, timeLeft, targetTime}) => {
  return (
    <View>
       <View style={styles.inlinegroup}>
            <Text style={{fontSize: 16, fontWeight:'bold', paddingHorizontal: 8}}>Didn't receive the email?</Text>
            {!resendingEmail && (
                <TouchableOpacity 
                    style={[styles.textlink, {opacity: !activeResend && 0.5}]}
                    disabled={!activeResend}
                    onPress={resendEmail}>
                        <Text style={{fontSize: 16, fontWeight:'bold', textDecorationLine: 'underline', color: resendStatus === 'Resend' || resendStatus==='Sent' ? colors.primary : colors.red}}>{resendStatus}</Text>
                </TouchableOpacity>
            )}
            {resendingEmail && (
                <TouchableOpacity 
                    style={styles.textlink}
                    disabled={true}>
                        <Text style={{fontSize: 15, textDecorationLine: 'underline', color: resendStatus === 'Resend' || resendStatus==='Sent' ? colors.primary : colors.red}}>
                            <ActivityIndicator color={colors.primary} />
                        </Text>
                </TouchableOpacity>
            )}

       </View>
        {!activeResend && (
            <Text style={{fontSize: 16, textAlign: 'center'}}>
                in 
                <Text style={{fontSize: 16, fontWeight:'bold', textAlign:'center'}}>{` ${timeLeft || targetTime} `}</Text>
                second(s)
            </Text>
        )}
    </View>
  )
}

export default ResendTimer