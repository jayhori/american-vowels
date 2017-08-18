export const AboutMe = ({first_name, profession, skills, position}) =>
    <div>
        <p>{first_name} is a {
            profession[Math.floor(Math.random() * (Math.floor(profession.length - 1) - Math.ceil(0) + 1)) + Math.ceil(0)]
            } whose skills include {
            skills.map(
                (data, i) => (skills.length === i + 1) ? ' and ' + data : data + ', '
            )}. When he is not programming, he plays the point guard position in basketball, discovers new bands in music festivals, and enjoys the city life in Tokyo.
        </p>
    </div>
