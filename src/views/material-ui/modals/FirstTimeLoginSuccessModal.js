import React from "react";
import { connect } from "react-redux";
import { hideFirstTimeLoginSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class FirstTimeLoginSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="first-time-login-success-modal"
        closeAction={hideFirstTimeLoginSuccessModal}
        title="Velkommen som bruker"
      >
        <p>Din brukerkonto er nå bekreftet.</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(FirstTimeLoginSuccessModal);
