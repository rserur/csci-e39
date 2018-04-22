import React from 'react'
import PropTypes from 'prop-types'

const MessageList = ({chat}) => {
  return <section id='messages'>
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

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
})

MessageList.propTypes = {
  chat: PropTypes.shape({
		typing: PropTypes.arrayOf(studentPropType).isRequired,
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			createdAt: PropTypes.instanceOf(Date).isRequired,
		})).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired
	}),
}

export default MessageList
