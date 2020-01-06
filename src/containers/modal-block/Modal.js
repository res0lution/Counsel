import React from 'react';
import Modal from 'react-bootstrap/Modal';
import FormModal from '../../components/form-block/FormModal.js';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal.js';
import { withTranslation } from 'react-i18next';
import propTypes from 'prop-types';

class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    const {dispatch, show} = this.props;
    dispatch(closeModal(show));
  };

  handleShow() {
    const {dispatch, show} = this.props;
    dispatch(openModal(show));
  };

  render() {
    const {show} = this.props;
    
    return <Modal className="mt-5 pt-5" show={show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{this.t("Fill this form and our manager will ask on all your questions")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormModal t={this.t} />
      </Modal.Body>
    </Modal>
  };
};

ModalForm.propTypes = {
  show: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired,
  t: propTypes.func.isRequired,
};

ModalForm.defaultProps = {
  show: false,
};

const mapStateToProps = (state) => {
  const {stateModal} = state;
  const {show} = stateModal;
  return {
    show
  };
};

export default connect(mapStateToProps)(withTranslation()(ModalForm));