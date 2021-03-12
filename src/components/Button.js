import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
	static contextType = LanguageContext;

	renderText(value) {
		return value === "english" ? "Submit" : "Invia";
	}

	// alternative method which avoids creating a function instance inside render method
	// can be used by setting the child of the LanguageContext.Consumer as: {this.renderTextAlt()}
	renderTextAlt = () => value => {
		return value === "english" ? "Submit (alt)" : "Invia (alt)";
	}

	render() {
		{/* child of a Consumer has to be a function! */ }
		return (
			<ColorContext.Consumer>
				{color =>
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{value => this.renderText(value)}
						</LanguageContext.Consumer>
					</button>}
			</ColorContext.Consumer>
		);
	}
}


export default Button;

