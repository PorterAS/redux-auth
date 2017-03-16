import React from "react";
import { hideOAuthSignInSuccessModal } from "../../../actions/ui";
import { connect } from "react-redux";
import Modal from "./Modal"

class OAuthSignInSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="oauth-sign-in-success-modal"
        closeAction={hideOAuthSignInSuccessModal}
        title="Welcome">
        <p>Du er nå logget inn som {this.props.auth.getIn(["user", "attributes", "provider"])}.</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(OAuthSignInSuccessModal);
