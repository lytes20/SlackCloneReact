import React, { Component } from "react";
import { connect } from "react-redux";

import { createMessage } from "../actions/messagesActions";

import "../assets/styles/messagesdisplay.css";

class MessagesDisplay extends Component {
  state = { message: "", newMessages: [] };

  /**
   * Handles event change when a user is typing a message
   * @param {object} event - Event that occurs on an input
   * @returns {void}
   */
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * Handles submitting a message
   * @returns {void}
   */
  handleMessageSubmission = () => {
    // TODO: Implement logic for submitting a message
  };

  /**
   * Handles submitting a message
   * @returns {void}
   */
  handleKeyPress = event => {
    if (event.key === "Enter") {
      const { message, newMessages } = this.state;
      const newMessageObject = {
        sender: "Gideon Bamuleseyo",
        receiver: "Njeri Brenda",
        message
      };
      const newMessageArray = newMessages.concat(newMessageObject);
      this.setState({ message: "", newMessages: newMessageArray });
      this.props.createMessage(newMessageObject);
    }
  };
  render() {
    const { message, newMessages } = this.state;
    const { inbox } = this.props;
    return (
      <div className="container-messages-display">
        <div>
          <div>
            {inbox.map((message, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    maxWidth: "50%",
                    padding: "10px",
                    margin: "8px",
                    display: "inline-block"
                  }}
                >
                  <p>{message.message}</p>
                </div>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div>
            {newMessages.map((message, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    maxWidth: "50%",
                    padding: "10px",
                    margin: "8px",
                    display: "inline-block"
                  }}
                >
                  <p>{message.message}</p>
                </div>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="footer">
          <input
            type="text"
            value={message}
            name="message"
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    inbox: state.appReducer.inbox
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createMessage: message => dispatch(createMessage(message))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesDisplay);
