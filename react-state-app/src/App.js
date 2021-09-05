// import React, { useState, useEffect } from 'react'
import React, {useReducer} from 'react'
import './App.css'

 
function App() {
  const [checked, toggle] = useReducer(
    //created a reducer function which takes the current state and returns the new state
    (checked) => !checked,
    false
  )

  return (
    <>
      <input type="checkbox" value={checked} onChange={ toggle }/>
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

// function App() {

	// Using useState() function with initial state.
	// emotion is the state variable and setEmotion is the function we call here to set the initial state to be

      // const [emotion, setEmotion] = useState('happy')
      // const [secondary, setSecondary] = useState('tired')

      // useEffect(() => {
      // 	console.log(`It's ${emotion} around here`)
      // 	//declaring a dependency array inside the [].
      // }, [emotion])

      // useEffect(() => {
      // 	console.log(`It's ${secondary} around here`)
      // 	//declaring a dependency array inside the [].
      // }, [secondary])

      // 	return (
      // 		<>
      // 			<h1>
      // 					Current emotion is {emotion} and {secondary}.
      // 			</h1>
      // 			<button onClick={() => setEmotion('happy')}>
      //         Happy
      //       </button>
      // 			<button onClick={() => setSecondary('crappy')}>
      //         Make Crappy
      //       </button>
      // 			<button onClick={() => setEmotion('accomplished')}>
      //         Accomplish
      //       </button>
      // 			<button onClick={() => setEmotion('enthusiastic')}>
      //         Enthuse
      //       </button>
      // 		</>
      // 	)
      // }

// function SecretComponent() {
//   return <h1> Secret Infor for authorized users only</h1>
// }
// function RegularComponent() {
//   return <h1> Everyone can see this component.</h1>
// }
// using if statement for rendering the state
// function App(props) {
//   if(props.authorized) {
//     return <SecretComponent />
//   } else {
//     return <RegularComponent />
//   }
// }

// using ternary operator

// function App(props) {
// 	return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>
// }

//object destructuring
// function App(authorized) {
// 	return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>
// }

export default App
