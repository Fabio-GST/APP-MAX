import React from "react";
import { View } from "react-native";

export default function HomeButton({color, focused, size}){
    return(
        <View
        style={{
            marginBottom: 60,
            width: 80,
            height: 80,
            borderRadius: 40,
            aligniItems: 'center',
            justifyContent: 'center',
            backgroundColor: focused  ? color : 'grey'
        }}>
        <Image
            source={require('../img/logo.png')}
        />
        </View>
    )
}