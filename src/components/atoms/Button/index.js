import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function Button({title}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.button.primary,
        paddingVertical: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[500],
        textAlign: 'center',
        color: colors.white
    }
})
