import React from 'react'
import { Provider } from 'react-redux'
import PostCardList from './components/PostCardList'
import Post from './components/Post'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Container } from 'react-bootstrap'

import { store } from './redux/app/store'
import PostContainer from './components/Post';


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<PostCardList count={5} />} />
              <Route exact path="/blog/:slug" element={<PostContainer />} />
            </Routes>
          </Router>

        </Container>


      </Provider>
    </div>
  )
}

export default App