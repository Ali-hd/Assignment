import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({comment}) => {
    return (
        <View style={styles.container}>
            <Text>Name: {comment.name}</Text>
            <Text>Email: {comment.email}</Text>
            <Text>Description: {comment.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 10
    },
});

export default Comment;