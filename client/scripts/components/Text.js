import React, {Component, PropTypes} from 'react';
import Alerter from './Alerter';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value, error: props.error};
    }
    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value, error: nextProps.error});
    }
    onChange(e) {
        let newValue = e.target.value;
        this.setState({value: newValue, error: ''});
        if(this.props.onChange){
            this.props.onChange(newValue);
        }
    }
    getValue(){
        return this.state.value;
    }
    render() {
        return (
            <div className="form-group" style={this.props.hidden?{display:'none'}:{display:'block'}}>
				<label>{this.props.title}</label>
				<input className="form-control" name={this.props.name} ref="input"
				type={this.props.type || 'text'} placeholder={this.props.emptyString}
				onChange={this.onChange.bind(this)}
				value={this.state.value}/>
				<Alerter text={this.state.error || ""} type="danger" closable={false}/>
			</div>
        );
    }
};