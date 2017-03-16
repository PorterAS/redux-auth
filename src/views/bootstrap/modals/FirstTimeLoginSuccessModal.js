import React from "react";
import { hideFirstTimeLoginSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";
import { connect } from "react-redux";

class FirstTimeLoginSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="first-time-login-success-modal"
        title="Velkommen som bruker"
        closeBtnLabel="Close"
        closeAction={hideFirstTimeLoginSuccessModal}>
        <p>Din brukerkonto er nå bekreftet.</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(FirstTimeLoginSuccessModal);
