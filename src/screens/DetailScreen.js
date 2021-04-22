import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

export const DetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Detail Screen</Text>
            <Button onPress={()=>navigation.navigate('Intro')} buttonText={"Go to Home"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#e2bcb7',
      alignItems: 'center',
      justifyContent: 'center',
    },
      
})
