import React, {Component}from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GlobalNav from '../components/Nav';
import Messager from '../components/Messager';
import Loading from '../components/Loading';
import * as messageActions from '../actions/message';
import settings from '../constants/settings';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <Messager {...this.props.message} onClose={this.props.actions.clearMessage}/>
                <Loading />
                <GlobalNav title={settings.title} user={this.props.user || {}}/>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {message: state.message || {}};
}
function mapDispatchToProps(dispatch){
	return{
		actions : bindActionCreators(messageActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);