import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  console.log(props)
  return (
      <h1>{props.course.name}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part osa={props.parts} harj={props.exercises}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.parts}
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
    <p>{props.osa} {props.harj}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Content parts={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Content parts={course.parts[2].name} exercises={course.parts[2].exercises}/>
      <Total parts={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))