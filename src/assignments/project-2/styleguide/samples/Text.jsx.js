import React from 'react'

class Text extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="Text styleguide">
      <h3>Text Styleguide</h3>
        <nav className="MainNavigation">
          <h1>Logo/Branding Text</h1>
          <span className="channel-name stub"></span>
        </nav>

        <section className="MessageList component">
          <h2>H2 Header</h2>
      
          <div className="MessageCard component">
            <label>
              <span className="student-name">A students name</span>
              &nbsp;at&nbsp;
              <span className="created-at">10-10-1010</span>
            </label>
            <p>Paragraph text, <b>in bold</b> and <i>italic</i>. <b><i>Brilliantly oblique</i></b>, always clean.</p>          
          </div>
          <div className="MessageCard component with-top-border">
            <label>
              <span className="student-name">Some other student</span>
              &nbsp;at&nbsp;
              <span className="created-at">11-21-2020</span>
            </label>
            <p>More text.</p>          
          </div>

          <section>
              <span className="error error-message">Error Message</span>
          </section>   
        </section>
              
        <section className="FlyoutMenu">
            <div className="component">{/*hackish way to separate out flyout positioning*/}
              <h4>Flyout Menu</h4>  
              <ul>
                <li>
                  <div className="MemberEntry">
                    <span className="menu-text">Menu Text</span>
                  </div>
                </li>
              </ul>
            </div>
        </section>
            
  		</section>
    )
  }
}

export default Text
