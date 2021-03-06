import React, { Component } from 'react'
import { Grid, Cell, Layout } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Layout
          style={{
            background:
              'url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)  center / cover',
          }}
        >
          <Grid className="contact-grid">
            <Cell className="title" col={6}>
              <h2>Eleni Aslanidou</h2>
              <p>
                My name is Eleni Aslanidou. I am Front-end Developer. I have
                bachelor in IT and Communications Engineering. As a person I
                have great energy and I am open minded. I have the "of course I
                can" attitude because I am not afraid of new challenges. I
                always strive to improve myself.
              </p>
              <i className="fa fa-envelope-open" aria-hidden="true" />{' '}
              <p className="contactInfo">helena.aslanidou@gmail.com</p>
              <i className="fab fa-linkedin" aria-hidden="true" />
              <p className="contactInfo">
                https://www.linkedin.com/in/eleni-aslanidou/
              </p>
            </Cell>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Contact
