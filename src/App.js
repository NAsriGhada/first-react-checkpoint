import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from './components/Navbar';
import  Form  from './components/Form';

function App() {
  return (
    <div className="first-container">
      <Navbar/>
      <Form/>
    </div>
  )
}

export default App
