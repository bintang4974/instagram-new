import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListStory } from '../../atoms';

const Story = ({ storys }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {storys.map((story) => {
                    return (
                        <ListStory key={story.id} story={story} />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10
    }
})
