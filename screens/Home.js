import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import PostCard from '../components/PostCard'

import {
    Header,
} from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {

    const [allposts, setAllPosts] = useState([])

    useEffect(() => {
        //get posts
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log('all posts response', res)
                setAllPosts(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return <>
        <SafeAreaView>
            <Header />
            <ScrollView>
                {allposts.map((post, i) =>
                    <PostCard navigation={navigation}  key={post.id} index={i} post={post} />
                )}
            </ScrollView>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    // add styles
    container: {
        justifyContent: 'center',
        padding: 5,
        flex: 1,
    },
});

export default Home;