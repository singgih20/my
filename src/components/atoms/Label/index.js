import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function Label({type}) {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text(type)}>{type === 'primary' ? "New" : "Current"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: type => ({
        backgroundColor: type === 'primary' ? colors.label.primary : colors.label.secondary,
        paddingVertical: 6,
        width: 70,
        borderRadius: 6,
        alignItems: 'center'
    }),
    text: type => ({
        fontFamily: type === 'primary' ? fonts.primary[400] : fonts.primary[700],
        fontSize: 12,
        color: type === 'primary' ? colors.white : "#646567",
    })
})
