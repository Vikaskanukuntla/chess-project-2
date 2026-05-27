import './App.css'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { Landing } from './screens/Landing';
import { Game } from './screens/Game';

import { Signup } from './pages/signup';
import { Signin } from './pages/signin';

function App() {

  return (

    <div className='h-screen bg-black'>

      <BrowserRouter>

        <Routes>

          <Route
            path='/'
            element={<Landing />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

          <Route
            path='/signin'
            element={<Signin />}
          />

          <Route
            path='/game'
            element={<Game />}
          />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App