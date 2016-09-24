import React, {Component, PropTypes} from 'react';

export default class Tools extends Component{
    constructor(props) {
        super(props);
    }
    onSearch(){
        this.props.onSearch(this.refs.search.value);
    }
    onSearchReset(){
        this.refs.search.value = '';
        this.props.onSearchReset('');
    }
    getSearchString(){
        return this.refs.search.value
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 btn-group" style={{paddingLeft: '10px'}}>
                        <button className="btn btn-default btn-primary"  onClick={this.props.onEdit} id="edit">
                            <i className="glyphicon glyphicon-edit"/>编辑
                        </button>
                        <button className="btn btn-default btn-danger"   onClick={this.props.onDelete} id="delete">
                            <i className="glyphicon glyphicon-remove-sign"/>删除
                        </button>
                    </div>
                    <div className="col-md-3 input-group" style={{paddingRight: '10px'}}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder={this.props.searchEmptyString} ref="search"/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.onSearch.bind(this)} >
                                    <i className="glyphicon glyphicon-search"/>查询
                                </button>
                                <button className="btn btn-default" type="button" onClick={this.onSearchReset.bind(this)} >
                                    重置
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
Tools.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchReset: PropTypes.func.isRequired
}