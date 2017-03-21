import React from "react";
import { hidePasswordResetRequestErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class RequestPasswordResetErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="request-password-reset-error-modal"
        closeAction={hidePasswordResetRequestErrorModal}
        title="Vennligst sjekk epost adresse og prøv igjen"
        errorAddr={["requestPassswordReset", "errors"]} />
    );
  }
}

export default RequestPasswordResetErrorModal;
