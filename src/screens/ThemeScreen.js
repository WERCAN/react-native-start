import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

export const ThemeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Theme Screen</Text>
            <Button onPress={()=>navigation.navigate('Credits')} buttonText={"Press here!"}/>
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
