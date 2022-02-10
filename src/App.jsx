import React from 'react'
import './App.css'

import AppState from './context/AppState' 

import Keyboard from './components/keyboard'
import Display from './components/display'

function App() {
  return (
    <AppState>
      <div className="App">
        <Display></Display>
        <Keyboard></Keyboard>
      </div>
    </AppState>
  )
}

export default App
