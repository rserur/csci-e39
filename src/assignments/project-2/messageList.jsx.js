import React from 'react'

class messageList extends React.Component {

}

render () {
  return <section id="messages">
    <h2>Messages</h2>
    <ul>
      {chat.messages.map(({id, student, text, createdAt}) =>
        <li key={id}>
          <label>{student.name} at {createdAt.toISOString()}</label>
          <p>{text}</p>
        </li>
      )}
    </ul>
  </section>
}

export default messageList
