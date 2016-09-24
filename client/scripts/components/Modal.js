import React, {Component, PropTypes} from 'react';

export class Modal extends Component{
	render() {
        let contentStyle = {};
        if (this.props.height) contentStyle.height = this.props.height + 'px';
        if (this.props.top) contentStyle.top = this.props.top + 'px';
        if (this.props.left) contentStyle.left = this.props.left + 'px';
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.id} data-backdrop="static">
                <div className="modal-dialog" role="document" style={this.props.width?{width:this.props.width + 'px'}:{}}>
                    <div className="modal-content" style={contentStyle}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};
Modal.propTypes = {
    id: PropTypes.string.isRequired,
};
export class Header extends Component{
	render() {
        return(
            <div className="modal-header" style={{display:(this.props.showHeader?"block":"none")}}>
                <button type="button" className="close" 
                    data-dismiss="modal" aria-label="Close"
                    style={{display:(this.props.closable?"block":"none")}}>
                    <span aria-hidden="true">&times;</span>
                </button>
                {this.props.children}
            </div>
        )
    }
};

export class Body extends Component{
	render() {
        return(
            <div className="modal-body">
                {this.props.children}
            </div>
        )
    }
};

export class Footer extends Component{
	render() {
        return(
            <div className="modal-footer">
                {this.props.children}
            </div>
        )
    }
};