import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

export default function SettingsScreen(props){
    const { navigation } = props;

    const goToPage = () =>{
    navigation.navigate("Home");
    }

    return(
        <SafeAreaView>
            <Text>Settings</Text>
            <Text>Settings</Text>
            <Text>Settings</Text>
            <Text>Settings</Text>
            <Button onPress={goToPage} title="Ir a Home"/>
        </SafeAreaView>
    )
}