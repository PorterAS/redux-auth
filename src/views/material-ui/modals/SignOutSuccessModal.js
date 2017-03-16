import React from "react";
import { hideSignOutSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="sign-out-success-modal"
        closeAction={hideSignOutSuccessModal}
        title="Du er nå utlogget">
        Velkommen tilbake.
      </Modal>
    );
  }
}

export default SignOutSuccessModal;
