import React, { useContext } from 'react'
import AppContext from '../context/appContext'
function Display() {
    const appContext = useContext(AppContext)
    const { text } = appContext
  return (
    <div>{ text }</div>
  )
}

export default Display