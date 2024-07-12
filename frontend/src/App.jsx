import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Books from './Books/Books.jsx';
import Contacts from './Contact/Contacts.jsx';
import Login from './components/Login.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;