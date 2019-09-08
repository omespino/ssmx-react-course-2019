import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { categoryResult, itemResult } from './reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({categoryResult, itemResult})
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
)
