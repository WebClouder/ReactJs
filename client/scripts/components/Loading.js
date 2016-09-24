import React, {Component, PropTypes} from 'react';
import {Modal} from './Modal';
export default class Loading extends Component{
	render() {
		return (
			<Modal id="loading" height={100} width={100} top={200}>
                <p className="loading">数据处理中...</p>
            </Modal>
		);
	}
};