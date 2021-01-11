import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import Comment from '../components/Comment'

const Post = ({ route, navigation }) => {

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        //get post details
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(res => {
                console.log('post details', res)
                setPost(res.data)
                navigation.setOptions({ headerTitle: res.data.title })
            })
            .catch(err => console.log(err))
    }, [])

    const deletePost = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(res => {

                navigation.navigate('Home')
            })
            .catch(err => console.log(err))
    }

    const loadComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`)
            .then(res => {
                console.log('post comments', res)
                setComments(res.data)
            })
            .catch(err => console.log(err))
    }

    return <SafeAreaView>
        {
            post ?
                <ScrollView style={styles.container}>
                    <View>
                        <Text>
                            {post.body}
                        </Text>
                    </View>
                    <View style={styles.btn}>
                        <Button
                            title="Delete post"
                            onPress={() => deletePost()}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button
                            title="Load Comments"
                            onPress={() => loadComments()}
                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View>
                        {
                            comments.map(comment => <Comment comment={comment} />)
                        }
                    </View>
                </ScrollView> : <Text>Loading</Text>
        }
    </SafeAreaView>
}


const styles = StyleSheet.create({
    btn: {
        margin: 20
    },
    container: {
        padding: 10
    },
});

export default Post;