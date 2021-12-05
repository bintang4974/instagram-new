import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DummyInstagram } from '../../../assets';
import { colors } from '../../../utils';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={DummyInstagram} style={styles.logo} />
            </TouchableOpacity>
            <View style={styles.iconWrapper}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/plus-2-math.png' }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png' }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/facebook-messenger.png' }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        width: 120,
        height: 40
    },
    iconWrapper: {
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 8
    },
})
