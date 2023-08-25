import { StyleSheet,Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, { useRef, useState } from 'react';
import COLORS from '../constants/colors';
import Button from '../components/Buttons';



const OTPVerification = () => {
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();
    const et6 = useRef();

    const [f1, setF1] = useState('');
    const [f2, setF2] = useState('');
    const [f3, setF3] = useState('');
    const [f4, setF4] = useState('');
    const [f5, setF5] = useState('');
    const [f6, setF6] = useState('');


    return (
        <View style={styles.container}>    
        <Text style= {styles.title}>Enter the verification code recieved</Text>
        <View style={styles.otpview}>
            <TextInput ref={et1} style={[styles.inputview, 
           {borderColor: f1.length >= 1 ? 'grey' : '#000' } ,]}
            keyboardType='number-pad' maxLength={1} value={f1}
            onChangeText={txt =>{
                setF1(txt);
                if (txt.length>=1){
                    et2.current.focus();
                }
            }}/>
            <TextInput ref={et2} style={[styles.inputview, 
           {borderColor: f2.length >= 1 ? 'grey' : '#000' } ,]}
            keyboardType='number-pad'  maxLength={1} value={f2}
            onChangeText={txt =>{
                setF2(txt);
                if (txt.length>=1){
                    et3.current.focus();
                }else if(txt.length < 1){
                    et1.current.focus();
                }
            }} />
            <TextInput ref={et3} style={[styles.inputview, 
           {borderColor: f3.length >= 1 ? 'grey' : '#000' } ,]}
            keyboardType='number-pad'  maxLength={1} value={f3}
            onChangeText={txt =>{
                setF3(txt);
                if (txt.length>=1){
                    et4.current.focus();
                }else if(txt.length < 1){
                    et2.current.focus();
                }
            }}/>
            <TextInput ref={et4} style={[styles.inputview, 
           {borderColor: f4.length >= 1 ? 'grey' : '#000' } ,]}
            keyboardType='number-pad'  maxLength={1} value={f4}
            onChangeText={txt =>{
                setF4(txt);
                if (txt.length>=1){
                    et5.current.focus();
                }else if(txt.length < 1){
                    et3.current.focus();
                }
            }}/>
            <TextInput ref={et5} style={[styles.inputview, 
           {borderColor: f5.length >= 1 ? 'grey' : '#000' } ,]}
            keyboardType='number-pad'  maxLength={1} value={f5}
            onChangeText={txt =>{
                setF5(txt);
                if (txt.length>=1){
                    et6.current.focus();
                }else if(txt.length < 1){
                    et4.current.focus();
                }
            }}/>
            <TextInput ref={et6} style={[styles.inputview, 
           {borderColor: f6.length >= 1 ? 'grey' : '#000' } ,]}
            keyboardType='number-pad'  maxLength={1} value={f6}
            onChangeText={txt =>{
                setF6(txt);
                if (txt.length>1){
                    et6.current.focus();
                }else if(txt.length < 1){
                    et5.current.focus();
                }
            }}/>
        </View>
        <View></View>
        <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22,
                    
                }}>
               <TouchableOpacity
               onPress={() => navigation.navigate('')}
                            style={{
                                marginVertical: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    textAlign: 'right',
                                }}
                            >
                                Resend code
                            </Text>
                        </TouchableOpacity>

                </View>

        <Button
                    title="Verify"
                    onPress={() => navigation.navigate(' ')}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
                  
        </View>
    );
};

export default OTPVerification;

const styles = StyleSheet.create({
container: {
flex: 1
},
title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop:150,
    alignSelf:'center',
    color: COLORS.primary,
},
otpview:{
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:100,

},
inputview:{
    width: 50,
    height:50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft:10,
    textAlign:'center',
    fontSize:18,
    fontWeight:'400'

},

});