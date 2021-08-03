import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILLSavingMoney } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap, RmPerMonth } from '../../atoms'

export default function SavingCard() {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={ILLSavingMoney} style={styles.image} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.heading}>General Savings</Text>
                <Gap height={5} />
                <RmPerMonth black amount="500" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16
    },
    imageWrapper: {
        backgroundColor: colors.backgroundPage,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13
    },
    textWrapper: {
        marginLeft: 18
    },
    image: {
        width: 35,
        height: 35
    },
    heading: {
        fontSize: 14,
        fontFamily: fonts.primary[700],
        color: colors.text.secondary
    }
})
