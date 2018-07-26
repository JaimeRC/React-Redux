import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
//import reduxPromise  from 'redux-promise' -> Middleware for Promise the Redux
import async from 'middleware/async' // -> Middleware Async create for us
import reducers from 'reducers'

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState,
        //applyMiddleware(reduxPromise)
        applyMiddleware(async)
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}