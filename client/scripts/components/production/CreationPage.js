import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from './Form';
import {createProduction, clear} from '../../actions/production';
import {switchTabByIndex} from '../../actions/tab';
import {clearErrors} from '../../actions/error';
class CreationPage extends Component {
    componentDidMount() {
        this.props.actions.switchTabByIndex(0);
        this.props.actions.clear();
        this.props.actions.clearErrors();
    }
    onCreate() {
        this.props.actions.createProduction(this.refs.form.getFormData());
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"/>
                    <div className="col-md-4">
                        <Form ref='form' data={this.props.production || {}} errors={this.props.errors || {}}/>
                    </div>
                    <div className="col-md-4"/>
                </div>
                <div className="row">
                    <div className="col-md-4"/>
                    <div className="col-md-8">
                        <button type="button" className="btn btn-default btn-primary" onClick={this.onCreate.bind(this)}>确定</button>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    let production = state.production, errors = state.errors;
    return {production,errors}
}
function mapDispatchToProps(dispatch){
	return {
		actions : bindActionCreators({createProduction, clear, clearErrors, switchTabByIndex}, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CreationPage);