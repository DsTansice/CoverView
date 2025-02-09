import React from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./CoverImage.css";

class ComponentToImg extends React.Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	render() {


		return (
			<React.Fragment>
				<div ref={this.componentRef}>{this.props.children}</div>
				<button
					className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
					onClick={() => exportComponentAsPNG(this.componentRef, 'cover')}>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
					<span className="mx-2">Download</span>
				</button>
			</React.Fragment>
		);
	}
}

export default ComponentToImg;
