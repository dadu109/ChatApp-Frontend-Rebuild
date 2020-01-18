import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './theme'
import theme from './theme'
import Root from './views/Root'

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Root/>
        </ThemeProvider>
        <GlobalStyle />
  </Provider>,
  document.getElementById('root')
);
