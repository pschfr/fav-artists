// Require dependencies
import React from 'react'

export default class extends React.Component {
	// called by Zero on page load
	static async getInitialProps(){
		var json = await fetch("/api/index").then((resp) => resp.json())
		return {string: json.string}
	}

	// Rendered to the page
	render() {
		return <p>Current string is: {this.props.string}</p>
	}
}
