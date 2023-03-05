import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";


export default function EventScreen({navigation}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.userTxt}>Upcoming Events</Text> 


         </View>
    );
}


const styles = StyleSheet.create({    
    container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		alignItems: "center",
      	},
    userTxt: {
		color: "#FFFFFF",
		marginLeft: 10,
		fontSize: 20,
        paddingTop:80,
        fontSize:40,
	},






});