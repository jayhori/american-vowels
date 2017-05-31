export const AboutMe = ({name, profession, skills, position}) => (
    <div>
        <h2>The Developer</h2>
        <p>My name is {name}. I am a {
            profession[Math.floor(Math.random() * (Math.floor(profession.length - 1) - Math.ceil(0) + 1)) + Math.ceil(0)]
            } whose skills include {
            skills.map(
                (data, i) => (skills.length === i + 1) ? ' and ' + data : data + ', '
            )}. When I am not programming, I play the<span> </span>
            <span>
                {(() => {
                    switch (position){
                    case 1:
                        return 'point guard'
                        break
                    case 2:
                        return 'shooting guard'
                        break
                    case 3:
                        return 'small forward'
                        break
                    case 4:
                        return 'power forward'
                        break
                    case 5:
                        return 'center'
                        break
                    default:
                        return 'n/a'
                }})()}
            </span> position in basketball, discover new bands in music festivals, and enjoy the city life in Tokyo.
        </p>
    </div>
)
