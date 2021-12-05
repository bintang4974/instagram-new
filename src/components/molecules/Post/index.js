import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListPost } from '../../atoms';

const Post = ({ posts }) => {
    return (
        <View>
            {posts.map((post) => {
                return (
                    <ListPost post={post} key={post.id} />
                )
            })}
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})
