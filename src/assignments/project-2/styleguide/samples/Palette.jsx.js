import React from 'react'

class Palette extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section className="Palette styleguide">
        <h3>Palette Styleguide</h3>
        <ul> 
          <li className="palette--color primary-color">$primary-color: #E8EBF8;</li>
          <li className="palette--color primary-text-color">$primary-text-color: #110800;</li>
          <li className="palette--color secondary-color">$secondary-color: #efefef;</li>
          <li className="palette--color secondary-text-color">$secondary-text-color: #235789;</li>
          <li className="palette--color highlight-color">$highlight-color: white;</li>
          <li className="palette--color error-color">$error-color: #C1292E;</li>
          <li className="palette--color accent-color-blue">$accent-color-blue: #235789;</li>
          <li className="palette--color accent-color-red">$accent-color-red: #C1292E;</li>
          <li className="palette--color accent-color-yellow">$accent-color-yellow: #F1D302;</li>
        </ul>
      </section>
    )
  }
}

export default Palette
