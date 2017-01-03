import React from "react";
import { hideEmailSignInErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignInErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="email-sign-in-error-modal"
        closeAction={hideEmailSignInErrorModal}
        title="Problem ved innlogging"
        errorAddr={["emailSignIn", "errors"]} />
    );
  }
}

export default EmailSignInErrorModal;
