import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, Post, Story } from '../../components';
import { dummyPost, dummyStory } from '../../data';
import { colors } from '../../utils';

const Home = () => {
    const [story, setStory] = useState(dummyStory);
    const [post, setPost] = useState(dummyPost);

    return (
        <View style={styles.page}>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <Story storys={story} />
                <Post posts={post} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
