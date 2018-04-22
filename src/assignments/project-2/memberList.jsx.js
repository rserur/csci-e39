import React from 'react'
import PropTypes from 'prop-types'

const MemberList = ({students}) => {
  return <section id="members">
		<h2>Members</h2>
		<ul>
			{students.map(({id, name}) =>
				<li key={id}><span>{name}</span></li>
			)}
		</ul>
  </section>
}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
})

MemberList.propTypes = {
	students: PropTypes.arrayOf(studentPropType).isRequired
}

export default MemberList
