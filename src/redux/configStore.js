import { combineReducers, createStore } from "redux";
import { gamePlay } from './reducers/gamePlay'

const rootReducer = combineReducers({
    gamePlay
})

export const store = createStore(rootReducer)