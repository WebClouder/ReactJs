import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';
class Tab extends Component {
	constructor(props) {
		super(props);
	}
	onClick(){
		this.props.onClick(this.props.title);
	}
	render() {
		return (
			<li role="presentation" className={this.props.active?'active':''}>
				<Link to={this.props.to} onClick={this.onClick.bind(this)}>{this.props.title}</Link>
			</li>
		);
	}
}
Tab.propTypes = {
	active: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
class TabPanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ul className="nav nav-tabs">
					{this.props.tabs.map((tab,i) => {
						return <Tab {...tab} key={i} onClick={this.props.onTabClick.bind(this)}/>
					})}
				</ul>
				<div className="tab-body">{this.props.children}</div>
			</div>
		);
	}
}
TabPanel.propTypes = {
	tabs: PropTypes.array.isRequired,
	onTabClick: PropTypes.func.isRequired,
}

export default TabPanel;