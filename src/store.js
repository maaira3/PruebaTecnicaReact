import {characterReducers} from './reducers/characterReducers'
import {episodesReducers} from './reducers/episodesReducers'
import {filterReducers} from './reducers/filterReducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const reducer = combineReducers({
    characters : characterReducers,
    episodes: episodesReducers,
    //filters: filterReducers
})

export const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)