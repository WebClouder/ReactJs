import React, {Component} from 'react';
import Alerter from './Alerter';

export default class DatePicker extends Component {
    constructor(props){
        super(props);
        this.state = {
	        data: [],
            value: ''
        }
    }
    setValue(value){
        var bindObj = this.props.bind,
            name = this.props.name;
        if(bindObj && name) {
            bindObj[name] = value;
        }
        this.setState({value: value});
    }
    getDisplayValue() {
        var value = this.state.value || this.props.value,
            valueField = this.props.valueField,
            displayValueField = this.props.displayValueField,
            data = this.state.data;
        if(value !== void(0)){
            var res = (this.state.data || []).filter(function(d){
                return d[valueField] === value;
            });
            if(res.length === 1){
                return res[0][displayValueField]
            }
        }else if(data && data.length > 0){
            return data[0][displayValueField];
        }
        return ""
    }
    getValue(){
        var emptyString = this.props.emptyString,
            value = this.refs.val.text;
        return emptyString !== value ? value : "";
    }
    onSelect(e) {
        var dataset = e.target.dataset,index, valueField = this.props.valueField;
        if(dataset){
            index = dataset.index;
        }else{
            index = e.target.getAttribute('data-index');
        }
        this.setValue(this.state.data[index][valueField]);
    }
	render() {
        let displayValue,
            valueField = this.props.valueField,
            displayValueField = this.props.displayValueField,
            comp = this;
            if(!comp.state.value){
                comp.state.value = comp.props.value;
            }
        displayValue = comp.getDisplayValue()
		return (
			<div className="form-group">
                <label>{comp.props.title}</label>
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" 
                        style={comp.props.width?{minWidth: comp.props.width}:{}}
                        id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span ref="val" style={{display:"inline-block",width:"95%"}} >
                            {displayValue || comp.props.emptyString}
                        </span>
                        <span className="caret" style={{display:"inline-block"}} />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {(comp.state.data || comp.props.data).map(function renderDropDownItem(d, i){
                            return (
                                <li key={i}>
                                    <a href="javascript:void(0)" onClick={comp.onSelect} 
                                        data-index={i}>
                                    {d[displayValueField]}
                                    </a>
                                </li>)
                        })}
                    </ul>
                </div>
                <Alerter text={this.state.error || ""} type="danger"/>
            </div>
		);
	}
}