import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from "react-redux"

import store from "./redux/store"

it('renders without crashing', () => {
  const div = document.createElement('div')

  render(
    <Provider store={store()}>
      <App />
    </Provider>, 
    div
  )
});
