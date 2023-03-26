import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "./theme";
import { colors } from "./colors";

export const styles=StyleSheet.create({
    mainContainer:{
        alignItems:'center',
        flex: 1,
        justifyContent:'flex-end',
        padding: 15,
        backgroundColor:colors.light
        
    },
    styleContainer:{
        flex: 1,
        padding: 25,
        paddingTop: 20,
        backgroundColor: colors.white
    },
    modalContainer:{
        flex: 1,
        padding: 20,
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    modalstyle:{
        margin: 20,
        backgroundColor:colors.white,
        borderRadius:20,
        padding: 35,
        alignItems:'center',
        elevation:5,
        shadowColor:colors.black,
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius: 4,
        width: '100%'

    },
    innerContainer:{
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    welimage:{
        width:'100%',
        height:290,
        padding: 8
        
    },
    heading:{
        color:colors.primary,
        paddingVertical:20,
        ...FONTS.title
    },
    title:{
        textAlign:'center',
        fontSize:25,
        padding: 10,
        fontWeight:'bold',
        color:colors.primary
    },
    p:{
        ...FONTS.h2,
        color:colors.grey,
        letterSpacing:1.5,
        fontWeight:'600',
        textAlign:'center'
    },
    mbutton:{
        backgroundColor:colors.primary,
        paddingVertical: 18,
        marginVertical:25,
        width: '80%',
        borderRadius: 8,
    },
    btext:{
        ...FONTS.body,
        color: colors.white,
        textAlign:'center',
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    btextdisable:{
        ...FONTS.body,
        color: colors.grey,
        textAlign:'center',
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    topsection:{
        flex: 1,
        padding:15,
        justifyContent:'center'
        
    },
    bottomsection:{
        flex: 1,
        padding: 20,
        // justifyContent:'space-between'
    },
    iconbox:{
        width: 150,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150,
        backgroundColor: colors.lightGreen
    },
    input:{
        backgroundColor:colors.offwhite,
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 8,
        borderColor:colors.secondary,
        borderWidth: 2,
        fontSize:16,
        height: 60,
        width:'100%',
        marginVertical: 3,
        marginBottom: 10,
        color: colors.darkGrey
    },
    inputLabel:{
        color:colors.darkGrey,
        fontSize: 14,
        fontWeight:'600',
        textAlign: 'left'
    },
    inputIcon:{
        left: 15,
        top:38,
        position:'absolute',
        zIndex: 1
    },
    eyeIcon:{
        right: 15,
        top:38,
        position:'absolute',
        zIndex: 1
    },
    codeinputcontainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },
    hidecodeinput:{
        position: 'absolute',
        width:1,
        height:1,
        opacity:0
    },
    codeinputwrapper:{
        width:'70%',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    codeinput:{
        minWidth:20,
        borderColor:colors.secondary,
        borderWidth: 2,
        padding:12,
        borderRadius: 5
    },
    codeinputfocused:{
        minWidth:20,
        borderColor:colors.primary,
        borderWidth:2,
        padding:14,
        borderRadius: 5
    },
    codeinputtext:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.darkGrey
    },
    inlinegroup:{
        flexDirection:'row',
        padding: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    textlink:{
        justifyContent:'center',
        alignItems:'center'
    }
   

})