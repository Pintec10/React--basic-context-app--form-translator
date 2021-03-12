import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import { ColorStore } from '../contexts/ColorContext';
import Selector from './Selector';


class App extends React.Component {

	onPropertyChange = (property, value) => () => {
		this.setState({ [property]: value });
	}

	render() {
		return (<div className="ui container">
			<ColorStore>
				<LanguageStore>
					<Selector onPropertyChange={this.onPropertyChange} />
					<div className="ui divider"></div>
					<UserCreate />
				</LanguageStore>
			</ColorStore>
		</div>);
	}
}


export default App;