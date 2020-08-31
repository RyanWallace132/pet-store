import React from 'react'
import Display from './components/Display'
import Header from './components/Header'
import './App.css'

function App() {
  document.title = "Pet Store"
  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  )
}

export default App