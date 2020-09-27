import {createStore,applyMiddleware} from 'redux'
// import {cakeReducer} from './cakes/cakereducer.js'

import thunk from 'redux-thunk'

import {reducer} from './user/userreducer.js'


export const stores = createStore(reducer,applyMiddleware(thunk))


export default stores
