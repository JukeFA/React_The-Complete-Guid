import React, { useState } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  })

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = (newName) => {
    // console.log('Was Clicked')
    // DO NOT USE THIS!: this.state.persons[0].name = 'Maximilian'
    setPersonsState({persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
      ],
      otherState: personsState.otherState
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
      ],
      otherState: personsState.otherState
    })
  }


  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={() => switchNameHandler('Maximilian!!')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangedHandler} >My Hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}


export default app;