import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Gap, Label, RmPerMonth } from '../../atoms'

export default function TotalMonthlyDeposit({type}) {
    return (
        <View style={styles.container(type)}>
            <View style={styles.label}>
                <Label type={type} />
            </View>
            <Text style={styles.desc}>Total</Text>
            <Gap height={6} />
            <Text style={styles.desc}>Monthly Deposit</Text>
            <Gap height={10} />
            <RmPerMonth black={type === 'primary' ? true : false} amount="2,570" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: type => ({
        height: 125,
        backgroundColor: type === 'primary' ? colors.white : colors.secondary,
        paddingTop: 32,
        paddingLeft: 24,
        flex: 1,
        borderBottomRightRadius: type === 'primary' ? 16 : 0,
        borderTopRightRadius: type === 'primary' ? 16 : 0,
        borderTopLeftRadius: type === 'primary' ? 0 : 16,
        borderBottomLeftRadius: type === 'primary' ? 0 : 16
    }),
    label: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    desc: {
        fontSize: 14,
        color: colors.text.secondary,
        fontFamily: fonts.primary[700]
    }
})
