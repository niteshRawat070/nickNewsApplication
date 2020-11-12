import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../actions/newsAction";

const initialState = {
    //slices of state we'll use in our app
    articles: [], //use to store news data fetch from the remote server
    favorites: [] //it include the news we add to favorite

}

export default function (state = initialState, action) {     //(current state, action)

    switch (action.type) { //action.type tells us which type of action we want to perform
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload //payload is passed from the action//the newsapi data will now load to articles
                //sending this article to store
            }
        case TOGGLE_FAVORITES:
            //logic to add or remove item to favorites//if item is available then we have to remove it and vice versa
            const index = state.favorites.findIndex(article => article.url === action.payload); //it will return +1 or -1
            if (index >= 0) {
                //item exists in favorites
                const favorites = [...state.favorites];
                favorites.splice(index, 1); //splice use to remove an item of the array (how much we want to remove)
                return {
                    ...state,
                    favorites: favorites //key matches the value so we can use the key only

                }
            } else {
                //item does not in favorites
                const article = state.articles.articles.find(article => article.url === action.payload);

                return {
                    ...state,
                    favorites: state.favorites.concat(article) // concat use to add in articles
                }
            }

    }
    return state;
}