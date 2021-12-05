import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconDots } from '../../../assets';
import { fonts } from '../../../utils';

const ListPost = ({ post }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.wrapperProfil}>
                        <Image source={{ uri: post.profil }} style={styles.profil} />
                    </View>
                    <Text style={styles.name}>{post.nama}</Text>
                    <View>
                        <TouchableOpacity>
                            <IconDots />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Image source={{ uri: post.post }} style={styles.post} />
            <View style={styles.wrapperIcon}>
                <View style={styles.wrapperIcon2}>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png' }}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/windows/32/000000/speech-bubble--v1.png" }}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/000000/paper-plane.png" }}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconBook}>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/000000/bookmark-ribbon--v1.png" }}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default ListPost

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    profil: {
        height: 35,
        width: 35,
        borderRadius: 35 / 2
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapperProfil: {
        height: 45,
        width: 45,
        borderWidth: 1,
        borderRadius: 45 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontFamily: fonts.primary.semibold,
        marginLeft: 10,
        flex: 1,
    },
    post: {
        height: 250,
    },
    wrapperIcon: {
        flexDirection: 'row',
        padding: 10,
    },
    wrapperIcon2: {
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between'
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBook: {
        marginLeft: 'auto'
    }
})
