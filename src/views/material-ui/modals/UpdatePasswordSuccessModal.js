import React from "react";
import { hideUpdatePasswordSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class UpdatePasswordSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="update-password-success-modal"
        closeAction={hideUpdatePasswordSuccessModal}
        title="Endring av passord">
        <p>Ditt passord er nå endret.</p>
      </Modal>
    );
  }
}

export default UpdatePasswordSuccessModal;
