import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import toDoApp from './reducers.js'
import App from './components/App.js'

let store = createStore(toDoApp)

render(
        <Provider store={store}>
        <App />
        </Provider>,
    document.getElementById('root')
)
