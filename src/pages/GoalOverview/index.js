import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Header, TotalMonthlyDeposit, Gap, SavingCard, Button } from '../../components'
import { colors, fonts } from '../../utils'

export default function GoalOverview() {
    const line = {
        labels: ['Today', '2040'],
        datasets: [
          {
            data: [100, 150, 200],
          },
        ],
      };
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Header />
                    <Text style={styles.heading}>Goal Overview</Text>
                    <Gap height={20} />
                    <Text style={styles.desc}>Adding this goal will increase your total monthly deposit target</Text>
                    <Gap height={16} />
                    <View style={styles.totalMonthWrapper}>
                        <TotalMonthlyDeposit />
                        <TotalMonthlyDeposit type="primary" />
                    </View>
                    <Gap height={16} />
                    <View style={styles.chartWrapper}>
                    <LineChart
                        data={line}
                        width={Dimensions.get('window').width / 1.1}  // from react-native
                        height={220}
                        yAxisSuffix="K"
                        chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(52,157,223, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(191, 191, 191, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                    </View>

                    <Gap height={16} />
                    <SavingCard />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button title="Create Goal" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.backgroundPage,
        // backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        marginBottom: 85
    },
    buttonWrapper: {
        marginBottom: 18
    },
    heading: {
        fontFamily: fonts.primary[700],
        fontSize: 24,
        color: colors.text.primary
    },
    chartWrapper: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 16
    },
    desc: {
        fontFamily: fonts.primary[700],
        fontSize: 16,
        color: colors.text.secondary,
        maxWidth: Dimensions.get("window").width / 1.2,
        lineHeight: 24
    },
    totalMonthWrapper: {
        flexDirection: 'row'
    }
})
