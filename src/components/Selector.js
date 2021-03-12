import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Selector extends React.Component {

	render() {
		return (
			<>
				<LanguageContext.Consumer>
					{({ onLanguageChange }) =>
						<div>
							Select a language: &nbsp;
							<i className="flag uk" onClick={() => onLanguageChange("english")} />
							<i className="flag it" onClick={() => onLanguageChange("italian")} />
						</div>
					}
				</LanguageContext.Consumer>

				<ColorContext.Consumer>
					{({ onColorChange }) =>
						<div>
							Select a color: &nbsp;
								<i className="blue tint icon" onClick={() => onColorChange("blue")} />
							<i className="red tint icon " onClick={() => onColorChange("red")} />
						</div>
					}
				</ColorContext.Consumer>
			</>
		);
	}
}


export default Selector;