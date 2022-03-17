import React from 'react'
import { Provider } from 'react-redux'
import PostCardList from './components/PostCardList'

import { Container } from 'react-bootstrap'

import { store } from './redux/app/store'


const App = () => {
  return (
    <div>
      <Provider store={store}>

        <Container>

          <PostCardList count={2} />
        </Container>


      </Provider>
    </div>
  )
}

export default App