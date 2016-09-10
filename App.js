import React from 'react';
import ReactDOM from 'react-dom';

// return doesn't let you return more than 1 tag. It's because this is pretty much like the createElement syntax. You can only return 1 'react.createElement' in JSX. The 1st arguement is the tag, the second is props, and the last is the inner html.


// zeroth step: make widgets and other components for reuse:

/*


class Slider extends React.Component {
	render(){
		return(
			<div>
				<input ref="inp" type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
			</div>
		);	
	}
}

*/

// first step : create a class App to extend teh react component. You then might make something like the constructor which binds some state variables and an update method

/*

class App extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}


*/

// second step: describe the update method - for example, set state is referencing the red input value and setting itself to that value


/*

	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}


*/

// Third step: render step: draw the page. all must be in one div. note the special components, and they have the reference (like id? and the update method)

/*

render() {
		// the Widget component from below is now rendered up in here. So you can put like 6 of them in there and get six copies. Ref means you can use the react.dom
		return(
			<div>	
			<Slider ref="red" update={this.update}/>
			{this.state.red}
			<br />
			<Slider ref="green" update={this.update}/>
			{this.state.green}
			<br />
			<Slider ref="blue" update={this.update}/>
			{this.state.blue}
			<br />
			</div>
		);
	}
}

*/

// fourth step: show stately variables and render the dom - that last part is most important

/*

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

// we can use default props so that we don't have to put the variable in the App render belwo
App.defaultProps = {
	txt: 'this is the default text'
}

ReactDOM.render(
	<App cat = {5} />, 
	document.getElementById('app')
);


*/

//The class version of the app can have state. The parenthesis on "return" don't matter
class App extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	// to manage the state, a custom method of update. you don't need to pass all the variables, just the one you need. In the version with sliders and colors we can update red, green and blue as friends.
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render() {
		// the Widget component from below is now rendered up in here. So you can put like 6 of them in there and get six copies. Ref means you can use the react.dom
		return(
			<div>
				
			<Slider ref="red" update={this.update}/>
			{this.state.red}
			<br />
			<Slider ref="green" update={this.update}/>
			{this.state.green}
			<br />
			<Slider ref="blue" update={this.update}/>
			{this.state.blue}
			<br />
			</div>
		);
	}
}

// for "refs" methods
// Refs methods don't work with stateless stuff
class Slider extends React.Component {
	render(){
		return(
			<div>
				<input ref="inp" type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
			</div>
		);	
	}
}



// we can make "permenant" an "owned" component by doing it like this. Owner-ownee relationship
// const Widget = (props) => {
// 	// we can make "permenant" an "owned" component by doing it like this. Owner-ownee relationship
// 	return(
// 		<div>
// 		<input type="text"
// 		onChange={props.update} />
// 		<h1>{props.txt}</h1>
// 		</div>
// 	);
// }

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