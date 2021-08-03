import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'
import { IconBack } from '../../../assets'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <IconBack />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
    },
    iconWrapper: {
        borderRadius: 48 / 2,
        backgroundColor: colors.backgroundIcon,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
