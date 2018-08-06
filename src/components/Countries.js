import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'containers/Header'
import Country from 'components/Country';

class Countries extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const { data } = this.props;

		return (

			<div className='container'>
				<Header location={this.props.location} />
				<table className='table table-bordered table-striped'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Capital</th>
							<th>Population</th>
							<th>Domain</th>
						</tr>
					</thead>
					<tbody>
						{data.map(country => {
							return (
								<Country key={country.name} country={country} />
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return { data: state.country.data }
}

function mapDispatchToProps(dispatch) {
	return {}
}

Countries.defaultProps = {
	data: [],
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Countries)