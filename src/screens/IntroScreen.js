import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

export const IntroScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Intro Screen</Text>
            <Button onPress={()=>navigation.navigate('List')} buttonText={"Press here!"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#f6e6e4',
      alignItems: 'center',
      justifyContent: 'center',
    },
      
})
