import React from "react";
import { hideEmailSignUpSuccessModal } from "../../../actions/ui";
import { connect } from "react-redux";
import Modal from "./Modal";

class EmailSignUpSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        containerClass="email-sign-up-success-modal"
        show={this.props.show}
        closeAction={hideEmailSignUpSuccessModal}
        title="Registreringen var vellykket">
        <p>
          <span>En epost bekreftelse er sendt til</span>
          <span> {this.props.auth.getIn(["ui", "emailSignUpAddress"])}.</span>
          <span> Følge instruksjonene i denne for å bekrefte kontoen.</span>
        </p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpSuccessModal);
