import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"



export default function Login(params){
    const navigation = params.navigation;
    return (
            <ImageBackground source = {URL = 'https://unsplash.com/photos/76w_eDO1u1E/download?force=true&w=2400'}
             style = {{flex: 1,  alignItems: "center"}}>
                <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}} >
                    <Text style={{ fontSize: 30, color: "white"}}>Welcome to</Text>
                    <Text style={{ fontSize: 60, fontWeight: "bold", color: "grey"}}>All Nikes</Text>
                </View>

            
            
                <View style = {{flex: 1, justifyContent: "flex-end"}} >
                    <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Home");
                        }}
                        activeOpacity = {0.6}
                        style={{
                        padding: 10,
                        paddingHorizontal: 60,
                        paddingVertical: 22,
                        marginBottom: 20,
                        alignItems: "center",
                        borderRadius: 10,
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent: "flex-end"
                        }}
                    >
                        <AntDesign name="google" size={40} color="black" />
                        <Text style={{ paddingLeft: 10, color: "black", fontSize: 20 }}>Login with Google</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    );
}

 