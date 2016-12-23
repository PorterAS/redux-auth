import React from "react";
import { hideEmailSignUpSuccessModal } from "../../../actions/ui";
import { connect } from "react-redux";
import Modal from "./Modal";

class EmailSignUpSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="email-sign-up-success-modal"
        closeAction={hideEmailSignUpSuccessModal}
        title="Kontoen din er etablert">
        <p>
          <span>En epost bekreftelse er sendt til</span>
          <span> {this.props.auth.getIn(["ui", "emailSignUpAddress"])}.</span>
          <span> Følge instruksjonene i eposten for å fullføre registreringen.</span>
        </p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpSuccessModal);
