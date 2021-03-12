import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
	static contextType = LanguageContext;

	renderText(value) {
		return value === "english" ? "Submit" : "Invia";
	}

	render() {
		{/* child of a Consumer has to be a function! */ }
		return (
			<ColorContext.Consumer>
				{({ color }) => {
					return (<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{({ language }) => this.renderText(language)}
						</LanguageContext.Consumer>
					</button>)
				}}
			</ColorContext.Consumer>
		);
	}
}


export default Button;

