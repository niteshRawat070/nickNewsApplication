import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
//useSelector to select data from our states
//useDispatch use to trigger our redux actions//we use this to dispatch our fetchArticle
import * as newsAction from '../redux/actions/newsAction';


//connect this component to redux
const NewsListScreen = props => {

    const dispatch = useDispatch();
    //function which is triggered when this effect is applied//this will execute when the NewsListScreen Renders
    useEffect(() => {
        dispatch(newsAction.fetchArticles())//the action we want to dispatch
    }, [dispatch]); //dependency
    const { articles } = useSelector(state => state.news.articles); //this news is from the store, where we're using combineReducers//articles= the data we fetch from newsapi//articles contain the data from newsapi
    console.log(articles);

    return (
        <FlatList
            data={articles}
            keyExtractor={item => item.url}
            //renderItem= How our data will be rendered
            renderItem={({ item }) => (
                <Card
                    navigation={props.navigation}
                    title={item.title}
                    image={item.urlToImage}
                    description={item.description}
                    url={item.url}
                />
            )}
        />


    );
}

const styles = StyleSheet.create({
    container: {}
});

export default NewsListScreen;