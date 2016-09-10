import React from 'react';

// return doesn't let you return more than 1 tag. It's because this is pretty much like the createElement syntax. You can only return 1 'react.createElement' in JSX. The 1st arguement is the tag, the second is props, and the last is the inner html.

//The class version of the app can have state. The parenthesis on "return" don't matter
class App extends React.Component {
	render() {
		return (<div><h1>Awesome</h1><h1>bob</h1></div>)
	}
}

// this version has no state. A class component has state. (This version is more win though.)
//const App = () => <h1> hello eggheads! </h1>

export default App