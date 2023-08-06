import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Login from './routes/login/login.route';
import Register from './routes/register/register.route';
import Verify from './routes/verify/verify.route';
import Forgot from './routes/forgot/forgot.route';
import Reset from './routes/reset/reset.route';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/authenticate/*' element={<Verify />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/newPassword/*' element={<Reset />} />
      </Routes>
    </Fragment>
  );
}

export default App;
