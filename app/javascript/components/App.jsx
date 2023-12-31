import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Greeting from './Greeting.jsx';

const App = () => {
  return (
    <Router >
      <Routes>
        <Route exact path = '/greeting' element = { <Greeting /> } />
      </Routes>
    </Router>
  )
}

export default App