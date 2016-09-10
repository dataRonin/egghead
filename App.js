import React from 'react';
import ReactDOM from 'react-dom';

// return doesn't let you return more than 1 tag. It's because this is pretty much like the createElement syntax. You can only return 1 'react.createElement' in JSX. The 1st arguement is the tag, the second is props, and the last is the inner html.

//The class version of the app can have state. The parenthesis on "return" don't matter
class App extends React.Component {
	constructor(){
		super();
		this.state = { txt: 'this is the state text '}
	}
	// to manage the state, a custom method of update. you don't need to pass all the variables, just the one you need
	update(e){
		this.setState({txt: e.target.value})
	}

	render() {
		// for the props version
		//let txt = this.props.txt
		//return <h1>{txt}</h1>
		return(
		<div>
		<input type="text"
		onChange={this.update.bind(this)} />
		<h1>{this.state.txt}</h1>
		</div>
		);
	}
}

// object to describe the types we want -- if we add isRequired, then the required property must be specifed
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

// we can use default props so that we don't have to put the variable in the App render belwo
App.defaultProps = {
	txt: 'this is the default text'
}

// notice how the let statement in this.props.txt then lets us use txt as the variable. then in the render, we set that text by calling that txt variable
//we will do rendering directly from app.js, so we can use "props"

ReactDOM.render(
	<App cat = {5} />, 
	document.getElementById('app')
);

// this version has no state. A class component has state. (This version is more win though.)
//const App = () => <h1> hello eggheads! </h1>

export default App