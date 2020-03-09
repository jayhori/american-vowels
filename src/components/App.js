import React, { useState } from 'react'
import { About } from './About'
import LookUpWord from './LookUpWord'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [aboutIsVisible, setAboutIsVisible] = useState(false)
  const [about, setAbout] = useState({
    name: 'American Vowels',
    description:
      'Look up an English word and study accurate sounds of its General American vowels one by one.',
    developer: {
      firstName: 'Jay',
      lastName: 'Hori',
      profession: 'computer programmer',
      skills: ['JavaScript', 'React', 'TypeScript', 'Angular'],
      city: 'Tokyo',
    },
  })

  const setLoadingStateToTruthy = () => setIsLoading(true)
  const setLoadingStateToFalsy = () => setIsLoading(false)
  const showAbout = () => setAboutIsVisible(true)
  const hideAbout = () => setAboutIsVisible(false)

  return (
    <div className="app">
      <header className="header">
        <h1>American Vowels</h1>
        <div className="summary">{about.description}</div>
      </header>
      <div>
        <LookUpWord
          showAboutStatus={showAbout}
          loading={isLoading}
          setLoadingStateToTruthy={() => setLoadingStateToTruthy()}
          setLoadingStateToFalsy={() => setLoadingStateToFalsy()}
          showAbout={() => showAbout()}
          hideAbout={() => hideAbout()}
        />
      </div>
      {aboutIsVisible ? (
        <div>
          <a
            onClick={() => hideAbout()}
            role="button"
            tabIndex="0"
            className="button"
          >
            Show Less
          </a>
          {aboutIsVisible ? <About about={about} /> : null}
        </div>
      ) : !isLoading ? (
        <div>
          <a
            onClick={() => showAbout()}
            role="button"
            tabIndex="0"
            className="button"
          >
            About
          </a>
        </div>
      ) : null}
    </div>
  )
}

export default App
