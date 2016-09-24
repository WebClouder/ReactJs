import React, {Component, PropTypes}from 'react';

export default class Alerter extends Component{
    constructor(props) {
        super(props);
    }
    onClose(e){
        this.props.onClose();
    }
    render() {
        const {text, type} = this.props;
		return (
			<div ref='alerter' style={text?{display:'block'}:{display:'none'}}>
				<div className={"alert alert-" + type + " autoWrap"} role="alert">
					<button type="button" className="close" aria-label="Close" onClick={this.onClose.bind(this)}>
						<span aria-hidden="true">&times;</span>
					</button>
					{text}
				</div>
			</div>
		);
	}
}

Alerter.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}