import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome , FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={{ display: 'flex' }}>
            <Image
                style={{
                    width: 400,
                    height: 200,
                    margin: 70,
                    alignSelf: 'center'
                }}
                source={require('../img/maxi_roxo.png')}
            />

            <Text style={{
                alignSelf: 'center',
                fontSize: 40,
                marginTop: -50
            }}> Entre em Contato </Text>

            <Text style={{
                fontSize: 35,
                marginTop: 35,
                marginLeft: 30,
            }}> Suporte
            </Text>
            <View >
                    <TouchableOpacity style={{}} onPress={() => { }}>
                        <FontAwesome name="gears" size={40} color="black" marginLeft={200} style={{position:'absolute', right: 35 ,top: -50}}/>
                    </TouchableOpacity>
            </View>

            <Text style={{
                fontSize: 35,
                marginTop: 35,
                marginLeft: 30,
            }}> Financeiro

               

            </Text>
            <View >
                    <TouchableOpacity style={{}} onPress={() => { }}>
                        <FontAwesome5 name="dollar-sign" size={40} color="black" marginLeft={200} style={{position:'absolute', right: 35 ,top: -50}}/>
                    </TouchableOpacity>
                </View>
            <Text style={{
                fontSize: 35,
                marginTop: 36,
                marginLeft: 30,
            }}> Comercial

               
            </Text>
            <View >
                    <TouchableOpacity style={{}} onPress={() => { }}>
                        <FontAwesome5 name="phone-alt" size={40} color="black" marginLeft={200} style={{position:'absolute', right: 35 ,top: -50}}/>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
