import React from "react";
import { View, Text, Button,SafeAreaView } from "react-native";

export default function HomeScreen(props){
const { navigation } = props;

const goToPage = () =>{
    navigation.navigate("Settings");
}
    return(
        <SafeAreaView>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
            <Button onPress={goToPage} title="Ir a Ajustes"/>
        </SafeAreaView>
    )
}