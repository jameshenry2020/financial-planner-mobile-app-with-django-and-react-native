import React from "react"
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "../constants/styles";


export const TopHalf=({children})=>{
    return (
        <View style={styles.topsection}>
            {children}
        </View>
    )
}

export const BottomHalf=({children})=>{
    return (
        <View style={styles.bottomsection}>
            {children}
        </View>
    )
}

export const IconBg=({children})=>{
    return (
        <View style={styles.iconbox}>
            {children}
        </View>
    )
}

export const KeyboardAvoidWrapper=({children})=>{
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

