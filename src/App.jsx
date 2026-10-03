const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.course}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <li className="part">
      <span className="part-name">{props.part.name}</span>
      <span className="part-units">{props.part.exercises}</span>
    </li>
  )
}

const Content = (props) => {
  return (
    <ul className="content">
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </ul>
  )
}

const Total = (props) => {
  return (
    <p className="total">
      <span>Number of units</span>
      <strong>
        {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </strong>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer className="footer">
      <p>
        {props.name} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 Industry Elective 1'
  const parts = [
    {
      name: 'IT332 Capstone and Research 1',
      exercises: 3
    },
    {
      name: 'CSIT327 Information Management 2',
      exercises: 3
    },
    {
      name: 'IT365 Data Analytics',
      exercises: 3
    }
  ]
  const studentName = 'Khylla Laine C. Menardo'
  const courseCode = 'CSIT340'
  const section = 'G05'

  return (
    <main className="card">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </main>
  )
}

export default App