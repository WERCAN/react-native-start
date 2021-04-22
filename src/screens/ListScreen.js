import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

export const ListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
            <Button onPress={()=>navigation.navigate('Detail')} buttonText={"Go to Details"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#ca8a8b',
      alignItems: 'center',
      justifyContent: 'center',
    },
      
})
