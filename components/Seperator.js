import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'



const Seperator = ({text}) => {
  return (
    <View style={styles.container}>
        <View style={styles.line}></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  )
}

export default Seperator

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    line:{
        height: 1,
        flex: 1,
        backgroundColor:colors.grey
    },
    text:{
        fontWeight:'800',
        fontSize: 20,
        color:colors.primary,
        marginHorizontal:8
    }
})