import './App.css';

function SecretComponent() {
  return <h1> Secret Infor for authorized users only</h1>
}
function RegularComponent() {
  return <h1> Everyone can see this component.</h1>
}
// using if statement for rendering the state
        // function App(props) {
        //   if(props.authorized) {
        //     return <SecretComponent />
        //   } else {
        //     return <RegularComponent />
        //   }
        // }

// using ternary operator

function App(props) {
	return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>
}

export default App;
