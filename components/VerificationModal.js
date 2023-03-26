import { View, Text, Modal, StatusBar} from 'react-native'
import React from 'react'
import { colors } from "../constants/colors";
import { styles } from "../constants/styles";
import  Ionicons from "react-native-vector-icons/Ionicons"
import SubButton from './SubButton';


const VerificationModal = ({modalVisible, successful, setModalVisible, requestMessage, persistloginAfterVerification}) => {

    const buttonHandler=()=>{
        if (successful) {
            persistloginAfterVerification()
        }
        setModalVisible(false)
    }
  return (
    <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
            {/* <SuccessContent />  */}
            {!successful && (
                <FailContent 
                    btnHandler={buttonHandler}
                    errorMsg={requestMessage}/>
            )}
            {successful && (
                <SuccessContent 
                 btnHandler={buttonHandler}/>
            )}
            
        </View>
    </Modal>
  )
}

const SuccessContent=({btnHandler})=>{
    return (
        <View style={styles.modalstyle}>
            <StatusBar style="dark-content"/>
            <Ionicons name="checkmark-circle"  size={100} color={colors.primary} />
            <Text style={[styles.title, {color: colors.black, textAlign:'center'}]}>Verified!</Text>
            <Text style={{fontSize: 16, fontWeight:'600'}}>you have successfully verified your account.</Text>
            <View style={{width: '100%'}}>
                <SubButton text={"Continue to App"} hasIcon={true} icon={"arrow-forward-circle"} style={{width:'100%', flexDirection:'row', justifyContent: 'center'}}/>
            </View>
            
        </View>
    )
}

const FailContent=({errorMsg, btnHandler})=>{
    return (
        <View style={styles.modalstyle}>
            <StatusBar style="dark-content"/>
            <Ionicons name="close-circle"  size={100} color={colors.red} />
            <Text style={[styles.title, {color: colors.black, textAlign:'center'}]}>Failed!</Text>
            <Text style={{fontSize: 16, fontWeight:'600'}}>{`Oop! account verification failed ${errorMsg}`}</Text>
            <View style={{width: '100%'}}>
                <SubButton text={"Try Again"} hasIcon={true} icon={"arrow-redo-circle"} style={{ backgroundColor:colors.red, width:'100%', flexDirection:'row', justifyContent: 'center'}}/>
            </View>
            
        </View>
    )
}

export default VerificationModal