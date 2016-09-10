import React from 'react';
import ReactDOM from 'react-dom';

// return doesn't let you return more than 1 tag. It's because this is pretty much like the createElement syntax. You can only return 1 'react.createElement' in JSX. The 1st arguement is the tag, the second is props, and the last is the inner html.

//The class version of the app can have state. The parenthesis on "return" don't matter
class App extends React.Component {
	constructor(){
		super();
		this.state = { txt: 'this is the state text '}
		this.update = this.update.bind(this)
	}
	// to manage the state, a custom method of update. you don't need to pass all the variables, just the one you need
	update(e){
		this.setState({txt: e.target.value})
	}

	render() {
		// the Widget component from below is now rendered up in here.
		return(
		<div>
			<Widget txt={this.state.txt} update={this.update}/>
			<Widget txt={this.state.txt} update={this.update}/>
			<Widget txt={this.state.txt} update={this.update}/>
			<Widget txt={this.state.txt} update={this.update}/>
			<Widget txt={this.state.txt} update={this.update}/>
			<Widget txt={this.state.txt} update={this.update}/>
		</div>
		);
	}
}

const Widget = (props) => {
	// we can make "permenant" an "owned" component by doing it like this. Owner-ownee relationship
	return(
		<div>
		<input type="text"
		onChange={props.update} />
		<h1>{props.txt}</h1>
		</div>
	);
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