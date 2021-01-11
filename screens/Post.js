import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Post = ({route}) => {

    const [post, setPost] = useState(null)

    useEffect(() => {
        //get post details
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(res => {
                console.log('post details', res)
                setPost(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return <SafeAreaView>
        {
            post ? 
            <ScrollView>
                <View>
                    <Text>
                        {post.body}
                    </Text>
                </View>
            </ScrollView> : <Text>Loading</Text>
        }
    </SafeAreaView>
}

const styles = StyleSheet.create({
    // add styles
});

export default Post;