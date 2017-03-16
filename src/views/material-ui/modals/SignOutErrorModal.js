import React from "react";
import { hideSignOutErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="sign-out-error-modal"
        title="Problem ved utlogging"
        closeAction={hideSignOutErrorModal}>
        <p>
          Det oppstod et problem. Vennligst logg inn på nytt og logg deretter ut.
        </p>
      </Modal>
    );
  }
}

export default SignOutErrorModal;
