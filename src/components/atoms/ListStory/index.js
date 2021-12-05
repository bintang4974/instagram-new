import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListStory = ({ story }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image source={{ uri: story.gambar }} style={styles.image} />
                </View>
                <Text style={styles.name}>{story.nama}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListStory

const styles = StyleSheet.create({
    wrapper: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 65,
        width: 65,
        borderRadius: 65 / 2
    },
    name: {
        textAlign: 'center'
    },
    container: {
        marginRight: 8
    }
})
