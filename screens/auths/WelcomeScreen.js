import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from "../../constants/styles";
import MainButton from '../../components/MainButton';

const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <Image resizeMode='contain' style={styles.welimage} source={require("../../assets/images/financial-services.png")} />
      <Text style={styles.heading}>Spending Tracker</Text>
      <Text style={styles.p}>save your money with conscious spending </Text>
      <MainButton text={"Get Started"}/>
    </View>
  )
}

export default WelcomeScreen