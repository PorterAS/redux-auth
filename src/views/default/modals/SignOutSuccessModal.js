import React from "react";
import { hideSignOutSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="sign-out-success-modal"
        title="Du er nå utlogget"
        closeAction={hideSignOutSuccessModal}>
        <p>Velkommen tilbake.</p>
      </Modal>
    );
  }
}

export default SignOutSuccessModal;
