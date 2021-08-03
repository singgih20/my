import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Gap({width, height}) {
    return (
        <View style={styles.container(width, height)}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: (width, height) => ({
        width,
        height
    })
})
