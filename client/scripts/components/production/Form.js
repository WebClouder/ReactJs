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
                            title="产品名称"
                            ref="name"  
                            value={this.props.data.name}
                            error={this.props.errors.name}
                        />
                    </div>
                    <div className="row">
                        <Text
                            title="研发序号"
                            ref="code"
                            value={this.props.data.code}
                            emptyString="必须为研发部门注册的12位序号"
                            error={this.props.errors.code}
                        />
                    </div>
                    <div className="row">
                        <Dropdown
                            title="产品负责人"
                            ref="pManagerId"
                            width="255px"
                            emptyString="请选择..." 
                            valueField="pManagerId"
                            displayValueField="pManagerName"
                        />
                    </div>
                    <div className="row">
                        <Text
                            title="产品负责人号码"
                            ref="pManagerPhone"
                            value={this.props.data.pManagerPhone}
                            emptyString="请输入正确11位手机号"
                            error={this.props.errors.pManagerPhone}
                        />
                    </div>
                    <div className="row">
                        <Dropdown
                            title="产品类别"
                            ref="typeId"
                            width="255px"
                            emptyString="请选择..." 
                            valueField="typeId"
                            displayValueField="type"
                        />
                    </div>
                    <div className="row">
                        <DatePicker
                            title="发售日期"
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