import { AboutApp } from './AboutApp'
import { AboutMe } from './AboutMe'

export const About = ({about}) => (
    <div className='about'>
        <h3>The App</h3>
        <AboutApp
            {...about}
        />
        <h3>The Developer</h3>
        <AboutMe
            {...about}
        />
    </div>
)
