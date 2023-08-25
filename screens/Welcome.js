import React from "react";
import { View,Text,Image,Button,Pressable } from "react-native";
import COLORS from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";



const Welcome = ({ navigation }) =>{

return(
    

<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
<View style= {{flex: 1} }>
<View>
    
<Image source={require("../assets/mss.png")}
        style={{
            height:100,
            width:130,
            borderRadius: 15,
            
            top:100,
            alignSelf:'center'
        }
        }
    />
</View>
<View style={{
    paddingHorizontal:22,
    position:"absolute",
    top:300,
    width:"100%",
    alignSelf:'center',
}}>
    <Text style={{
        fontSize:40,
        fontWeight:800,
        color: COLORS.primary,
    }}>Let's Get Started ....</Text>
    
</View>

                    

                    <View style={{
                       // flexDirection: "row",
                        marginTop: 400,
                        justifyContent: "center",
                        alignItems:"center"
                    }}>
                       <Button
                       onPress={()=>navigation.navigate("SignUp")}
                       title="GET STARTED"
                       style={{ 
                        backgroundColor: COLORS.primary,
                        width:"100%"
                       }}
                       />
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

</View>
</View>
</SafeAreaView>

)

}

export default Welcome;