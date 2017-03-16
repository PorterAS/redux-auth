import React from "react";
import { hideFirstTimeLoginErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class FirstTimeLoginErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="first-time-login-error-modal"
        closeAction={hideFirstTimeLoginErrorModal}
        title="Feil ved innlogging">
        <p>Konto kunne ikke bekreftes. Vennligst prøv igjen.</p>
      </Modal>

    );
  }
}

export default FirstTimeLoginErrorModal;
