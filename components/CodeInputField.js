import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import { styles } from '../constants/styles'

const CodeInputField = ({code, setCode, setPinReady, maxLength}) => {
        const textinputref=useRef(null)
        const codeDigitArray=new Array(maxLength).fill(0)
        //monitor input focus
    const [inputContainerisFocused, setInputContainerIsFocused]=useState(false)

    const handleOnBlur=()=>{
        setInputContainerIsFocused(false)
    }
    const handleOnPress=()=>{
        setInputContainerIsFocused(true)
        textinputref?.current?.focus()
    }

    useEffect(() => {
      setPinReady(code.length === maxLength)
    
      return () => setPinReady(false)     
    }, [code])
    
    
    const toCodeInput=(value, index)=>{
            const codeInputchar= " "
            const digit = code[index] || codeInputchar

            //formatting
            const isCurrentDigit = index === code.length
            const isLastDigit = index === maxLength - 1
            const isCodeComplete= code.length === maxLength
            const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeComplete)
            
            return (
                 <>  
                    <View key={index} style={inputContainerisFocused && isDigitFocused ? styles.codeinputfocused : styles.codeinput}>
                        <Text style={styles.codeinputtext}>{digit}</Text>
                    </View>
                 </>
            )
       }


  return (
    <View style={styles.codeinputcontainer}>
        <Pressable style={styles.codeinputwrapper} onPress={handleOnPress}>
            {codeDigitArray.map(toCodeInput)}
        </Pressable>
      <TextInput
       ref={textinputref}
       style={styles.hidecodeinput}
       value={code}
       onChangeText={setCode}
       onSubmitEditing={handleOnBlur}
       keyboardType="number-pad"
       returnKeyType="done"
        />
    </View>
  )
}

export default React.memo(CodeInputField)