import React, { useState } from 'react'
import { About } from './About'
import LookUpWord from './LookUpWord'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  const setLoadingStateToTruthy = () => setIsLoading(true)
  const setLoadingStateToFalsy = () => setIsLoading(false)

  return (
    <div className="app">
      <header>
        <h1>American Vowels</h1>
      </header>
      <About />
      <LookUpWord
        isLoading={isLoading}
        setLoadingStateToTruthy={() => setLoadingStateToTruthy()}
        setLoadingStateToFalsy={() => setLoadingStateToFalsy()}
      />
    </div>
  )
}

export default App
