import React, {Component, PropTypes} from 'react';
import Text from '../../components/Text';
import DatePicker from '../../components/DatePicker';
import Dropdown from '../../components/Dropdown';

export default class Form extends Component {
	constructor(props) {
		super(props);
        this.getFormData = this.getFormData.bind(this);
	}
    getFormData(){
        let fields = this.refs, formData = {};
        for(let fieldName in fields){
            formData[fieldName] = fields[fieldName].getValue();
        }
        return formData;
    }
	render() {
		return (
			<form className="form">
                <div className="container-fluid">
                    <Text ref="id" name="id" hidden={true} value={this.props.data.id}/>
                    <div className="row">
                        <Text 
                            title="购买者姓名"
                            ref="name"  
                            value={this.props.data.name}
                            error={this.props.errors.name}
                        />
                    </div>
                    <div className="row">
                        <Text
                            title="购买者ID"
                            ref="personId"
                            value={this.props.data.personId}
                            emptyString="必须为身份证／护照／驾照号码"
                            error={this.props.errors.personId}
                        />
                    </div>
                    <div className="row">
                        <Text
                            title="手机号码"
                            ref="phone"
                            value={this.props.data.phone}
                            emptyString="请输入正确11位手机号"
                            error={this.props.errors.phone}
                        />
                    </div>
                    <div className="row">
                        <Dropdown
                            title="产品类别"
                            ref="productionType"
                            width="255px"
                            emptyString="请选择..." 
                            valueField="productionTypeId"
                            displayValueField="productionType"
                        />
                    </div>
                    <div className="row">
                        <Dropdown
                            title="产品名称"
                            ref="productionName"
                            width="255px"
                            emptyString="请选择..."
                            valueField="productionId"
                            displayValueField="productionName"
                        />
                    </div>
                    <div className="row">
                        <DatePicker
                            title="购买日期"
                            ref="date"
                            name="date"
                            value={this.props.data.date}
                            error={this.props.errors.date}
                        />
                    </div>
                </div>
            </form>
		);
	}
};

Form.propTypes = {
    data: PropTypes.object.isRequired,
}