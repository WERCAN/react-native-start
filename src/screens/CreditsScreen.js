import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

export const CreditsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Credit Screen</Text>
            <Button onPress={()=>navigation.navigate('Home')} buttonText={"Press here!"}/>
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
