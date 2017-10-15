export const AboutMe = ({ firstName, lastName, profession, skills, city }) => (
  <span>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/jayhori"
    >
      {firstName} {lastName}
    </a>
    , a {profession} based in {city} whose skills include {skills.map(
      (data, i) => (skills.length === i + 1 ? ` and ${data}` : `${data}, `),
    )}.
  </span>
)

export { AboutMe as default }
