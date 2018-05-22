import React, { Component } from 'react';
import Header from './Components/Header';
import Content from './Components/Content'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux';
import './Styles/App.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header>Demo Redux</Header>
          <Content />
        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
