import React, {useState} from 'react';
import './App.css';

function App() {
  // Using useState() function with initial state.
  // emotion is the state variable and setEmotion is the function we call here to set the initial state to be 
  const [emotion, setEmotion] = useState('happy')
	return (
		<>
			<h1> Current emotion is {emotion}.</h1>
			<button onClick={() => setEmotion('happy')}>Happy</button>
			<button onClick={() => setEmotion('accomplished')}>Accomplish</button>
			<button onClick={() => setEmotion('enthusiastic')}>Enthuse</button>
		</>
	)
}

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
        
        

export default App;
