import { AboutApp } from './AboutApp'
import { AboutMe } from './AboutMe'

export const About = ({about}) => (
    <div className='about'>
        <AboutApp
            {...about}
        />
        <AboutMe
            {...about}
        />
    </div>
)
