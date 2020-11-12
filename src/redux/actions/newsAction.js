//identifiers
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

//payload- the data we pass through our store
export const fetchArticles = () => {
    return async dispatch => {
        //login to fetch data
        //fetch api from javascript - To make http requests
        //synchronous action
        const results = await fetch('http://newsapi.org/ get your key from here') //url of the data we want to fetch
        const resultData = await results.json();//converting result to json
        //async and await we request first and after completion we go for this->
        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData //this resultData contain the data from the newsapi//pass this to reducer
        });
    }
}

//url is the unique id
export const toggleFavorites = url => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url
    }
}