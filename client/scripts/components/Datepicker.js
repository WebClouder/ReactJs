import React, {Component} from 'react';
import Picker from 'react-bootstrap-date-picker';
import Alerter from './Alerter';

export default class DatePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {error: props.error};
	}
	componentWillReceiveProps(nextProps) {
        this.setState({value:nextProps.value, error: nextProps.error});
    }
    onChange(newValue) {
		this.setState({value: newValue, error: ''});
        if(this.props.onChange){
			this.props.onChange();
		}
    }
	formatDate(value) {
		if(!value){
			return ''
		}
		var date = new Date(Date.parse(value));
		return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	}
	getValue(){
		return this.formatDate(this.refs.date.state.value);
	}
    render() {
        return (
            <div className="form-group" style={this.props.hidden?{display:'none'}:{display:'block'}}>
				<label>{this.props.title}</label>
				<Picker ref='date'
					value={this.state.value}
					dateFormat="YYYY-MM-DD"
					onChange={this.onChange.bind(this)}
					dayLabels={['周一','周二','周三','周四','周五','周六','周日']}
					monthLabels={[
						'一月', '二月', '三月',
						'四月', '五月', '六月',
						'七月', '八月', '九月',
						'十月', '十一月', '十二月']} />
				<Alerter ref="alert" text={this.state.error || ""} type="danger"/>
			</div>
        );
    }
}