import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class App extends React.Component {

	state = {
		language: "english",
		color: "blue"
	};

	onPropertyChange = (property, value) => () => {
		this.setState({ [property]: value });
	}

	render() {
		return (<div className="ui container">
			<div>
				Select a language: &nbsp;
				<i className="flag uk" onClick={this.onPropertyChange("language", "english")} />
				<i className="flag it" onClick={this.onPropertyChange("language", "italian")} />
			</div>
			<div>
				Select a color: &nbsp;
				<i className="blue tint icon" onClick={this.onPropertyChange("color", "blue")} />
				<i className="red tint icon " onClick={this.onPropertyChange("color", "red")} />
			</div>
			<div className="ui divider"></div>
			<ColorContext.Provider value={this.state.color}>
				<LanguageContext.Provider value={this.state.language} >
					<UserCreate />
				</LanguageContext.Provider>
			</ColorContext.Provider>
		</div>);
	}
}


export default App;