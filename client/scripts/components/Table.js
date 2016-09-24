import React, {Component, PropTypes} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

export default class Table extends Component{
    constructor(props) {
        super(props);
        this.selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(238, 193, 213)",
            selectedRowsCount: 0,
            onSelect: props.onRowSelect,
            onSelectAll: props.onSelectAll
        }
        this.options = this.getOptions(props)
    }
    getOptions(props) {
        return {
            pageStartIndex: 1,
            // sizePerPage: props.pageSize,
            page: 1,
            searchDelayTime: 300,
            onPageChange: props.onPageChange
        }
    }
    getSelectedKeys() {
        return this.refs.table.state.selectedRowKeys;
    }
    getPageInfos() {
        let table = this.refs.table;
        return {
            pageSize: table.getSizePerPage(),
            currPage: table.getCurrentPage()
        };
    }
    resetPage(){
        this.refs.table.setState({currPage: 1});
    }
    render() {
        let props = this.props,
            fetchInfo = {dataTotalSize: props.totalSize};
        return (
            <BootstrapTable ref='table'
                data={this.props.data} striped={true} hover={true} pagination={true} 
                selectRow={this.selectRowProp}
                remote={true} options={this.options} fetchInfo={fetchInfo}
            >
                {this.props.children}
            </BootstrapTable>
        );
    }
};
