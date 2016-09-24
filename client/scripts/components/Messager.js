import React, {Component, PropTypes} from 'react';
import Alerter from '../components/Alerter';

export default class Messager extends Component{
    render() {
		const {text, type} = this.props;
		return (
			<div ref='messager' className="message" style={text?{display:'block'}:{display:'none'}}>
				<div className="container-fluid" >
					<div className="row">
						<div className="col-md-3" />
						<div className="col-md-6" >
							<Alerter text={text || ''} type={type} onClose={this.props.onClose}/>
						</div>
						<div className="col-md-3" />
					</div>
				</div>
			</div>
		);
	}
}