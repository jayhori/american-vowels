import { AboutApp } from './AboutApp'
import { AboutMe } from './AboutMe'

export const About = ({ about }) => (
  <div className="about set">
    <h3>About</h3>
    <p>
      <AboutApp
        {...about}
      />&nbsp;
      {about.name} is designed and developed by&nbsp;
      <AboutMe
        {...about.developer}
      />
    </p>
  </div>
)

export { About as default }
