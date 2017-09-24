export const AboutMe = ({ firstName, profession, skills }) => (
  <div>
    <p>
      {firstName} is a {profession} whose skills include {skills.map(
        (data, i) => (skills.length === i + 1 ? ` and ${data}` : `${data}, `),
      )}. When he is not programming, he plays the point guard position in
      basketball, discovers new bands in music festivals, and enjoys the
      city life in Tokyo.
    </p>
  </div>
)

export { AboutMe as default }
