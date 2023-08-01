import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../assets/calculatorlogo.png'
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={Logo} style={styles.innerimg} />
            </View>

        </View>
    )
}

export default IntroScreen
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: '#FF5757',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    inner: {
        width: 100,
        height: 100,
        backgroundColor: 'inherit'
    },
    innerimg: {
        width: 100,
        height: 100
    }
})