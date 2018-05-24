import React, { Component } from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import './Styles/App.css'

const store = createStore(reducer)

export default () =>  (
  <Provider store={store}>
    <React.Fragment>
      <Header>Redux</Header>
      <Content />
    </React.Fragment>
  </Provider>
)