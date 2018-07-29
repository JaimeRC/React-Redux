import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise  from 'redux-promise' // -> Middleware for Promise the Redux
import reducers from 'reducers'

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState,

        applyMiddleware(reduxPromise)
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}