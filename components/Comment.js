import React from 'react';
import { View } from 'react-native';

const Comment = ({comment}) => {
    return (
        <View>
            <Text>{comment.name}</Text>
            <Text>{comment.email}</Text>
            <Text>{comment.body}</Text>
        </View>
    )
}

export default Comment;