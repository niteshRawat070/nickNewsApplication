import { createStore, applyMiddleware, combineReducers } from 'redux';  //combineReducers- if our app is bigger we have many reducers so we declare them inside it
import thunk from 'redux-thunk'; //remote
import { composeWithDevTools } from 'redux-devtools-extension'; //bridge to connect our react app to redux

import newsReducer from './reducers/newsReducer'; //importing newsReducer

const rootReducer = combineReducers({
    news: newsReducer //key:value
});
//composeWithDevTools for debugging
const middleware = composeWithDevTools(applyMiddleware(thunk))  //the middleware we want to apply
//to setup our store, takes atleast 1 parameter that is the reducer
export default createStore(rootReducer, middleware);//second parameter

//rootReducer have all the reducers in key:value pair
//middleware have the bridge to connect our react to redux