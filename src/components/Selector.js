import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Selector extends React.Component {

	render() {
		return (
			<>
				<LanguageContext.Consumer>
					{context => {
						console.log(context)
						return (<div>
							Select a language: &nbsp;
							<i className="flag uk" onClick={() => context.onLanguageChange("english")} />
							<i className="flag it" onClick={() => context.onLanguageChange("italian")} />
						</div>)
					}
					}
				</LanguageContext.Consumer>

				<div>
					Select a color: &nbsp;
				<i className="blue tint icon" onClick={this.props.onPropertyChange("color", "blue")} />
					<i className="red tint icon " onClick={this.props.onPropertyChange("color", "red")} />
				</div>
			</>
		);
	}
}


export default Selector;