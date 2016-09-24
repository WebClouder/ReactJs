import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import TabPanel from '../components/TabPanel'; 
import * as tabActions from '../actions/tab';
import CreationPage from '../components/production/CreationPage';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TabPanel tabs={this.props.tabs} onTabClick={this.props.actions.switchTab}>
				{this.props.children || <CreationPage />}
			</TabPanel>
		);
	}
}
function mapStateToProps(state) {
	if(!state.tabs.length){
		let tabs = [
			{title:'产品购买',to:'/productions/form',active:true},
			{title:'已购买产品',to:'/productions/search',active:false}
		];
		state.tabs = tabs;
		return {tabs: tabs};
	}
	return {tabs: state.tabs};
}
function mapDispatchToProps(dispatch){
	return{
		actions : bindActionCreators(tabActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);