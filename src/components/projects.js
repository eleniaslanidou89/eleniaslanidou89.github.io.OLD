import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  Layout,
} from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project #1*/}
          <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            {' '}
            <a
              href="https://elenisblog.surge.sh/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '175px',
                  background:
                    'url(https://images.unsplash.com/photo-1607964969051-988be31393fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80png) center/cover',
                  width: '200px',
                  marginLeft: '80px',
                }}
              ></CardTitle>
            </a>
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              Eleni's Blog
              <br />
              <br />
              React website. I used React Hooks and React Router for this React
              JS Project. The website is fully responsive as well.
            </CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Eleni-s_Blog/tree/master"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the website*/}
              <a
                href="https://elenisblog.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #2*/}
          <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            <a
              href="http://bookstore-eleni.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '175px',
                  background:
                    'url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover',
                  width: '200px',
                  marginLeft: '80px',
                }}
              ></CardTitle>
            </a>
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              Bookstore / website
              <br />
              <br /> E-books
            </CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/e-books"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #3*/}
          <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            <a
              href="http://bookstore-eleni.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '175px',
                  background:
                    'url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover',
                  width: '200px',
                  marginLeft: '80px',
                }}
              ></CardTitle>
            </a>
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              My store
              <br />
              <br /> Angular application with components
            </CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/angular-fyx8tk-bgamsm"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for app*/}
              <a
                href="https://angular-fyx8tk-rwft5n.stackblitz.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #4*/}
          <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            <a
              href="https://remembertodo.surge.sh/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '175px',
                  background:
                    'url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover',
                  width: '200px',
                  marginLeft: '80px',
                }}
              ></CardTitle>
            </a>
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              My store
              <br />
              <br /> Angular application with components
            </CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/angular-fyx8tk-bgamsm"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for app*/}
              <a
                href="https://remembertodo.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="språk">
          <h1>Greek: Native </h1>
          <h1>Swedish: Upper-intermediate</h1>
          <h1>English: Proficient</h1>
          <h1>Russian: Proficient(only speaking)</h1>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Layout>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab style={{ fontFamily: 'Segoe UI', color: 'black' }}>
              Projects
            </Tab>
            <Tab style={{ fontFamily: 'Segoe UI', color: 'black' }}>
              Languages
            </Tab>
          </Tabs>
        </Layout>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects
