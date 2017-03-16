import React, { PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";
import Immutable from "immutable";

class ErrorList extends React.Component {
  static propTypes = {
    errors: PropTypes.object
  };

  static defaultProps = {
    errors: Immutable.fromJS([])
  };

  renderErrorList () {
    let errorCount = (this.props.errors || Immutable.fromJS([])).size;

    if (errorCount > 0) {
      // pluralize message
      let errorWord = "error";
      errorWord += (errorCount === 1) ? "" : "s";

      return (
        <div className="has-error">
          {this.props.errors.map((err, i) => {
            return (
              <p
                key={i}
                className="control-label modal-error-item"
                style={{paddingLeft: "20px", position: "relative"}}>
                <Glyphicon glyph="exclamation-sign"
                           style={{position: "absolute", left: 0, top: 2}} /> {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return (
        <p>
          <Glyphicon glyph="exclamation-sign" /> Vi kunne ikke behandle dataene. Vennligst sjekk utfylling av feltene og prøv deretter igjen.
        </p>
      );
    }
  }

  render () {
    return (
      <div className="auth-error-message">
        {this.renderErrorList()}
      </div>
    );
  }
}

export default ErrorList;
