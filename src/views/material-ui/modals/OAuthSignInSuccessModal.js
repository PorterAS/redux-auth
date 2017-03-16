import React from "react";
import { connect } from "react-redux";
import { hideOAuthSignInSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class OAuthSignInSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="oauth-sign-in-success-modal"
        title="Welcome"
        closeAction={hideOAuthSignInSuccessModal}>
        <p>Du er nå logget inn som {this.props.auth.getIn(["user", "attributes", "provider"])}.</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(OAuthSignInSuccessModal);
