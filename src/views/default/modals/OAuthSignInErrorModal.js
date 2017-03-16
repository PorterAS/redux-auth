import React from "react";
import { Glyphicon } from "react-bootstrap";
import Modal from "./Modal";
import { hideOAuthSignInErrorModal } from "../../../actions/ui";

class OAuthSignInErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="oauth-sign-in-error-modal"
        closeAction={hideOAuthSignInErrorModal}
        title="OAuth Problem ved innlogging">
        <p>
          <Glyphicon glyph="exclamation-sign" /> Feil brukernavn eller passord. Vennligst prøv igjen.
        </p>
      </Modal>
    );
  }
}

export default OAuthSignInErrorModal;
