import React, { useContext, useEffect } from 'react'
import AppContext from '../context/appContext'
function Keyboard() {
    const appContext = useContext(AppContext)
    const { currentIndex, handleKeypress } = appContext
    const handleEvent=(e)=>{
        handleKeypress(e.key)
    }

    useEffect(() => {
      document.addEventListener('keydown', handleEvent)
      return ()=>{
        document.removeEventListener('keydown', handleEvent)
      }
    })


    
  return (
    <div>{ currentIndex }</div>
  )
}

export default Keyboard