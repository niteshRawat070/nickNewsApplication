import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

function Card(props) {
    const dispatch = useDispatch();
    const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));//if the item is exist in favorites

    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('NewsDetails', {
                articleUrl: props.url
            })
        }}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{ uri: props.image ? props.image : 'https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        {/* if the title is not exist or exist  */}
                        {props.title && props.title.length > 25 ? props.title.slice(0, 25) + '...' : props.title}
                    </Text>
                    <MaterialIcons
                        name={isFav ? 'favorite' : 'favorite-border'}
                        color='#72bcd4'
                        size={24}
                        onPress={() => {
                            dispatch(newsAction.toggleFavorites(props.url))
                        }}
                    />
                </View>
                <View style={styles.descriptionWrapper} >
                    <Text style={styles.description} >
                        {props.description && props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 10
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    image: {
        height: '100%',
        width: '100%'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontFamily: 'PTSerif',
        fontSize: 20,
    },
    description: {
        fontFamily: 'PTSerif',
        fontSize: 15,
        marginTop: 10
    },
    descriptionWrapper: {
        paddingHorizontal: 15,
    }
});

export default Card;