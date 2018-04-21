import React from 'react'

class memberList extends React.Component {

}

render() {
  return 		<section id-"members">
  			<h2>Members</h2>
  			<ul>
  				{classroom.students.map(({id, name}) =>
  					<li key={id}><span>{name}</span></li>
  				)}
  			</ul>
  		</section>

}

export default memberList
