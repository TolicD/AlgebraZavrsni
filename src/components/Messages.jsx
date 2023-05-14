import React from "react";
import "./Messages.css";

function Messages(props ) {
  const { messages, currentMember } = props;

  const renderMessage = (message) => {
    const { member, text } = message;
    const isMessageFromMe = member.id === currentMember.id;
    const className = isMessageFromMe ? "currentMemberMessage" : "message";
    return (
      <li className={className}>
        <div className="content">
          <div className="username">{member.clientData.username}</div>
          <div
            className="text"
            style={{ backgroundColor: member.clientData.color }}
          >
            {text}
          </div>
        </div>
      </li>
    );
  };

  return <ul className="list">{messages.map((m) => renderMessage(m))}</ul>;
}

export default Messages;
