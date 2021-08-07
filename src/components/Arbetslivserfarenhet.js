import React, { Component } from 'react'
import { Grid, Cell, CardText, Layout } from 'react-mdl'
class Arbetslivserfarenhet extends Component {
  render() {
    return (
      <div className="arbetslivserfarenhet">
        <Layout
          style={{
            background:
              'url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80) center / cover',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Grid col={10}>
            <div className="arbetslivserfarenhet-list">
              <CardText
                style={{
                  fontSize: '20px',
                  color: 'black',
                  fontFamily: 'Segoe UI',
                }}
              >
                {' '}
                <h1>Work Experience</h1>
                <div className="date">01/2021-05/2021</div>
                <div className="erfarenhet-social-links">
                  Vinden
                  <a
                    href="https://www.vinden.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-link" aria-hidden="true" />
                  </a>
                  <br />
                  Front-end Developer(intership) - Stockholm
                  <br />
                </div>
              </CardText>

              <CardText
                style={{
                  fontSize: '20px',
                  color: 'black',
                  fontFamily: 'Segoe UI',
                }}
              >
                <div className="date">08/2019-09/2019</div>

                <div className="erfarenhet-social-links">
                  Jobb & Tillväxtcenter
                  <a
                    href="https://jobbtillvaxtcenter.se/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-link" aria-hidden="true" />
                  </a>
                  <br />
                  Exekutive Assistant – Stockholm
                </div>
              </CardText>
              <CardText
                style={{
                  fontSize: '20px',
                  color: 'black',
                  fontFamily: 'Segoe UI',
                }}
              >
                <div className="date">01/2019- 06/2019</div>
                <div className="erfarenhet-social-links">
                  Klax Hälsoförkolan Friskus AB
                  <a
                    href="https://www.klax.se/vara-forskolor/friskus/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-link" aria-hidden="true" />
                  </a>
                  <br />
                  Stockholm
                </div>
              </CardText>
              <CardText
                style={{
                  fontSize: '20px',
                  color: 'black',
                  fontFamily: 'Segoe UI',
                }}
              >
                <div className="date">09/2013–5/2018</div>
                <br />
                Teacher (Self-employed) - Greece
              </CardText>
              <CardText
                style={{
                  fontSize: '20px',
                  color: 'black',
                  fontFamily: 'Segoe UI',
                }}
              >
                <div className="date">04/2012–10/2012</div> <br />
                <div className="erfarenhet-social-links">
                  Hellenic Telecommunications Organisation
                  <a
                    href="https://www.cosmote.gr/cs/otegroup/en/omilos_ote.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fas fa-link" aria-hidden="true" />
                  </a>
                  <br />
                  Technical support- Greece
                </div>
              </CardText>
            </div>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Arbetslivserfarenhet
