import {applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {reducers} from './reducer.js'

import {watcherSaga} from './sagas'



const sageMiddleware = createSagaMiddleware()

export const stores = createStore(reducers ,applyMiddleware(sageMiddleware))

sageMiddleware.run(watcherSaga)



export default stores