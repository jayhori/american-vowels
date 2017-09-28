export const AboutMe = ({ firstName, profession, skills, city }) => (
  <div>
    <p>
      {firstName} is a {profession} based in {city} whose skills include {skills.map(
        (data, i) => (skills.length === i + 1 ? ` and ${data}` : `${data}, `),
      )}.
    </p>
  </div>
)

export { AboutMe as default }
