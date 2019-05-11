import React from 'react'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
              <span>SALLAUS OÜ © 2019 </span>
              </div>
              <div className="column is-4">
              <a className="has-text-white-ter" href="mailto:info@pakendamine.ee">info@pakendamine.ee</a>
              </div>
              <div className="column is-4">
              <span>Tähe 127, Tartu, Eesti</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
