import ReactDOM from 'react-dom';
import { App } from './components';
import { Provider } from 'react-redux'
import { store } from './store'
import './api/serverShop'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);