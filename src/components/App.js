import React from 'react';
import UserCreate from './UserCreate';
//import LanguageContext from '../contexts/LanguageContext';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import Selector from './Selector';


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
			<LanguageStore>
				<Selector onPropertyChange={this.onPropertyChange} />
				<div className="ui divider"></div>
				<ColorContext.Provider value={this.state.color}>

					<UserCreate />

				</ColorContext.Provider>
			</LanguageStore>
		</div>);
	}
}


export default App;