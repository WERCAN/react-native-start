import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {themes} from '../styles/Themes'

const Button = ({onPress, buttonText}) => {
    return (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
         <Text style={styles.title}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    customButton: {
        height: 50,
        width: 300,
        borderRadius: 25,
        backgroundColor: themes.light.colors.primary,
        borderStyle:'solid',
        alignSelf: 'center',
        borderWidth:0.5,
        justifyContent: 'center',
        margin:5,
    },
    title:{
        fontSize:20,
        lineHeight:45,
        textAlign:'center',
        letterSpacing: 0.6,
        color: themes.light.colors.text,
    }
})
