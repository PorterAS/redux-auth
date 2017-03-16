import React from "react";
import { hideSignOutErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="sign-out-error-modal"
        closeAction={hideSignOutErrorModal}
        title="Problem ved utlogging">
        <p>
          Det oppstod et problem. Vennligst logg inn på nytt og logg deretter ut.
        </p>
      </Modal>
    );
  }
}

export default SignOutErrorModal;
