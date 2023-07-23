import { compose, createStore } from 'redux'
import rootReducer from './reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootReducer, composeWithDevTools())

export default store
