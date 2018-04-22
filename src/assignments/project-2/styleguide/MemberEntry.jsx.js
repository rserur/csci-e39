import React from 'react'
import PropTypes from 'prop-types'

import { memberPropType } from './FlyoutMenu.jsx'

class MemberEntry extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="MemberEntry component">
        <span>{this.props.member.name}</span>
      </div>
    )
  }
}

MemberEntry.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
}




export default MemberEntry
