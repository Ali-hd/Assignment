import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const PostCard = ({post, index, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Post', { id: post.id })}>
        <View style={[styles.container, index % 2 == 0 ? {
            backgroundColor: '#eee'} : {backgroundColor: '#fff'}
        ]}>
            <Text numberOfLines={1}>
                {post.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});


export default PostCard;