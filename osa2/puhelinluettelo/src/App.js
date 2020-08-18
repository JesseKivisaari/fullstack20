import React, { useState, useEffect } from 'react'
import personsService from './services/persons'

const Person = ({ person, removePerson }) => {
    return (
        <li>{person.name} {person.number}
        <button onClick={removePerson}> Delete </button>
        </li>
    )
}

const PersonForm = ({ onSubmit, newName, newNumber, nHandler, pHandler }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                name: <input value={newName} onChange={pHandler}/>
                </div>
                <div>
                number: <input value={newNumber} onChange={nHandler}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const removePersonOf = (id) => {
    console.log(id)
    const person = persons.find(p => p.id === id)
    const changedPerson = { ...person}
    
    if (window.confirm(`Delete ${person.name} from the Phonebook ?`)) {
      personsService
      .remove(id, changedPerson)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id ? person : response.data))
      })
      setMessage(
        `Person ${person.name} removed succesfully!`
      )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
    
  }
  
  const addPerson = (e) => {
      e.preventDefault()
      if(persons.some(person => person.name === newName)){
        window.alert(`${newName} is already added to phonebook`)
        setNewName('')
        } else {
        const personObject = {
            name: newName,
            number: newNumber
        }

        personsService
        .create(personObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName('')
          setNewNumber('')
          setMessage(
            `Person ${newName} added succesfully!`
          )
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })
    } 
    
  }
  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="info">
      {message}
      </div>
    )
  }
  
  const handlePersonChange = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <h2> Add new </h2>
      <PersonForm onSubmit={addPerson} pHandler={handlePersonChange} 
        nHandler={handleNumberChange} newName={newName} newNumber={newNumber}
        />
      <h2>Numbers</h2>
      <div> 
        {persons.map((person, name) =>
          <Person key={name} person={person} 
          removePerson={() => removePersonOf(person.id)}
          />
        )}
      </div>
      
    </div>
  )
}


export default App