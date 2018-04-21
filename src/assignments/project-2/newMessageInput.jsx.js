import React from 'react'

class newMessageInput extends React.Component {

}

render () {
  return 		<section id="newMessage">
  			<input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
  			<button disabled={currentText === ``} onClick={this.onSend}>Send</button>
  			<p>{this.getTypingMessage()}</p>
  		</section>
}

export default newMessageInput
