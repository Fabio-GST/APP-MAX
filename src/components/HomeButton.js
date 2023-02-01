import React from "react";
import { View } from "react-native";
import { Image } from "react-native";

export default function HomeButton({color, focused, size}){
    return(
        <View
        style={{
            marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 50,
            aligniItems: 'center',
            justifyContent: 'center',
            backgroundColor: focused  ? color : 'grey'
        }}>
            <Image 
                style={{width:70, height:70, alignSelf:'center'}}
                source={require('../img/logo.png')}
            />
        </View>
    )
}