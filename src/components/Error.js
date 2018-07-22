import React, {Component} from 'react'
import {connect} from 'react-redux'

class Error extends Component{
	constructor(props){
		super(props)
	}

	render() {
		const {data} = this.props;
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="error-template">
						<h1>Oops!</h1>
						<h2>{data.status}</h2>
						<div className="error-details">
							{data.message}
						</div>
					</div>
				</div>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		data: state.example.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		routerActions: bindActionCreators(Object.assign({}, routerActions), dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Error)