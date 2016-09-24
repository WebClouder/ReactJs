import React, {Component, PropTypes} from 'react';
import {Modal, Body, Footer} from './Modal';
// import Form from './Form';

export default class EditingModal extends Component {
    onSubmit(){
        let formData = this.refs.form.getFormData();
        this.props.onSubmit(formData);
    }
    render() {
        let Form = this.props.form;
        return (
            <Modal id={this.props.id}>
                <Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2"/>
                            <div className="col-md-8">
                                <Form ref="form" data={this.props.data} errors={this.props.errors}/>
                            </div>
                            <div className="col-md-2"/>
                        </div>
                    </div>
                </Body>
                <Footer>
                    <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" className="btn btn-default btn-primary" onClick={this.onSubmit.bind(this)}>确定</button>
                </Footer>
            </Modal>
        );
    }
};

EditingModal.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    form: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}