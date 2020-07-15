import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const StatisticLine = ({text, value}) => {
  return (
    <div>
    <p> {text} {value}</p>
    </div>
  )
}
const Statistics = (props) => {
  if(props.all === 0){
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <div>
    <StatisticLine text='good' value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    <StatisticLine text='bad' value={props.bad} />
    <StatisticLine text='all' value={props.all} />
    <StatisticLine text='average' value={(props.goodValue + props.neutralValue + props.badValues)/ props.all} />
    <StatisticLine text='positive' value={props.good / props.all * 100 + '%'} />
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  let goodValue = 1 * good
  let neutralValue = 0 * neutral 
  let badValues = -1 * bad


  const handleGoodClick = ()=> {
    setGood(good +1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1> give feedback </h1>
      <div> 
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
      </div>
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} goodValue={goodValue} neutralValue={neutralValue}
      badValues={badValues}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)