import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import TabPanel from '../components/TabPanel';
import switchTab from '../actions/tab';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TabPanel tabs={this.props.tabs} onTabClick={this.props.actions.switchTab}>
				{this.props.children}
			</TabPanel>
		);
	}
}
function mapStateToProps(state) {
	return {tabs: state.tabs};
}
function mapDispatchToProps(dispatch){
	return{
		actions : bindActionCreators({switchTab}, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);