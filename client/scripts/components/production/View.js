import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Table from '../../components/Table';
import Tools from '../../components/Tools';
import EditingModal from '../../components/FormModal';
import Form from './Form';
import * as productionActions from '../../actions/production'
import {switchTabByIndex} from '../../actions/tab';
import {clearErrors} from '../../actions/error';
class View extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let actions = this.props.actions;
        actions.switchTabByIndex(1);
		actions.fetchPage(1, 10);
	}
	/*
		data processing
	*/
	createCriteria(data){
		let table = this.refs.table, pageInfo = table.getPageInfos();
		return {
			data: data || {data: table.getSelectedKeys()},
			pageNum: pageInfo.currPage,
			pageSize: pageInfo.pageSize,
			searchString: this.refs.tools.getSearchString()
		};
	}
	delete(){
		let criteria = this.createCriteria();
		this.props.actions.deleteProductions(criteria);
	}
	update(formData){
		let criteria = this.createCriteria(formData);
		this.props.actions.refreshProduction(formData);
		this.props.actions.updateProduction(criteria);
	}
	search(searchString){
		this.refs.table.resetPage();
		this.props.actions.searchProductions(searchString);
	}
	openModal(){
		let id = this.refs.table.getSelectedKeys()[0],
			[production] = this.props.productions.filter((v)=> v.id === id);
		this.props.actions.refreshProduction(production);
		this.props.actions.clearErrors();
		$('#productionEditing').modal('show');
	}
	onPageChange(pageNum, pageSize){
		this.props.actions.fetchPage(pageNum, pageSize);
	}
	render() {
		return (
			<div>
				<EditingModal
					id='productionEditing'
					form={Form}
					onSubmit={this.update.bind(this)}
					data={this.props.production}
					errors={this.props.errors}/>
                <Tools 
					ref='tools'
					searchEmptyString="最少输入2个字符"
					onEdit={this.openModal.bind(this)}
					onDelete={this.delete.bind(this)}
					onSearch={this.search.bind(this)}
					onSearchReset={this.search.bind(this)}
				/>
                <Table 
					ref='table'
					data={this.props.productions}
					totalSize={this.props.totalSize}
					onPageChange={this.onPageChange.bind(this)}
				>
                    <TableHeaderColumn dataField="name" dataSort={false}>产品名称</TableHeaderColumn>
                    <TableHeaderColumn dataField="id" isKey={true} dataSort={false}>产品编号</TableHeaderColumn>
					<TableHeaderColumn dataField="code" dataSort={false}>研发序号</TableHeaderColumn>
					<TableHeaderColumn dataField="pManagerName" dataSort={false}>产品负责人</TableHeaderColumn>
					<TableHeaderColumn dataField="pManagerPhone" dataSort={false}>产品负责人电话</TableHeaderColumn>
					<TableHeaderColumn dataField="type" dataSort={false}>产品类别</TableHeaderColumn>
                    <TableHeaderColumn dataField="date" dataSort={false}>发售日期</TableHeaderColumn>
                </Table>
            </div>
		);
	}
}

function mapStateToProps(state) {
	let productions = state.productions;
	return {
		production: state.production,
		productions: productions.data,
		totalSize: productions.totalSize,
		errors: state.errors
	};
}
function mapDispatchToProps(dispatch){
	return{
		actions : bindActionCreators({...productionActions, switchTabByIndex, clearErrors}, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(View);