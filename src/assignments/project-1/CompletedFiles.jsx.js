import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const CompletedFiles = ({files}) => {
	return <section id="completed">
    <h2>Completed</h2>
    <ul>
      {files.map(file => {
        const {id, name, url, error} = file

        return <li key={id}>
          <label>{name}</label>
          {!error && <img src={url} style={{maxWidth: `200px`}} />}
          {!!error && <p className="failure">{error}</p>}
        </li>
      })}
    </ul>
  </section>
}

CompletedFiles.propTypes = {
	files: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		name: PropTypes.string.isRequired,
		progress: PropTypes.number,
		url: PropTypes.string,
		error: PropTypes.string,
	})).isRequired
}

export default CompletedFiles