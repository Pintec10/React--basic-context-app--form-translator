import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {
	static contextType = LanguageContext;

	render() {
		{/* this.context can be used only if there is a single context! Otherwise Consumers need to be used */ }
		const text = this.context.language === "english" ? "Name" : "Nome";

		return (
			<div className="ui field">
				<label>{text}</label>
				<input />
			</div>
		)
	}
}


export default Field;