import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/reducer'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { thunkMiddleware } from 'redux-thunk'


// Bind ALL the middle ware based on Project mode 
const bindMiddleWare = (middleware) => {

    if (process.env.NODE_ENV != 'production') {
        
        const {composeWithDevTools} = require('redux-devtools-extension')

        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

// init reducers
const reducer = (state, {type, payload}) => {

    if (type == HYDRATE) {

        const nextState = {
            ...state,
            ...payload
        }

        return nextState
        
    }else{
        reducers(state, action)
    }

}

// initialize store
const initStore = () => {
    return createStore(reducer, bindMiddleWare([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
