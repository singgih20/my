import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function RmPerMonth({amount, black}) {
    return (
        <View>
            <Text style={styles.text(black)}>RM{amount}/mo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: black => ({
        fontSize: 16,
        color: black ? colors.text.primary : colors.text.secondary,
        fontFamily: fonts.primary[700]
    })
})
