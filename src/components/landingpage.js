import React, { Component } from 'react'
import { Grid, Layout } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div className="container" style={{ width: '100%', margin: 'auto' }}>
        <Layout className="backgroundImage">
          <Grid>
            <div className="banner-text">
              <img src="me.jpg" alt="Eleni" className="image" />
              <h1>
                Eleni Aslanidou
                <br />
                <p className="developer">Front-end Developer</p>
              </h1>
              <hr />
              <p className="skills">
                <span> CODE:</span> HTML5 | CSS | Bootstrap | React | Javascript
                <br /> Next.js | GraphQL | Material UI | Tailwind | CSSModules
                <br /> | Typescript | Angular
                <br />
                <span> TOOLBOX: </span>Visual Studio | Trello | Slack | GitHub |
                Fork | Linear | Figma | Sketch | Miro
              </p>

              <div className="social-links">
                {/*linkedIn*/}
                <a
                  href="https://www.linkedin.com/in/eleni-aslanidou/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*GitHub*/}
                <a
                  href="https://github.com/eleniaslanidou89"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Landing
