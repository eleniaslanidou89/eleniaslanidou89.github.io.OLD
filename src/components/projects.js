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
            <img src="weather-app.PNG" alt="Eleni" />
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
            <img src="weather-app.PNG" alt="Eleni" />
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              Weather App
              <br />
              <br />
              Weather app in React JS, I used the Open Weather Map API to make
              calls to a restful api to return the current weather data.
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
              {/*link for app*/}
              <a
                href="http://weatherappbyeleni.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #3*/}
          <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            <img src="weather-app.PNG" alt="Eleni" />
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              Bookstore / E-books
              <br />
              <br /> Website that has as a goal, making an end user able to
              browse within the available books. React, Next.js, Tailwind, API.
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
              {/*link for website*/}
              <a
                href="http://bookstore-eleni.herokuapp.com/"
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
            <img src="weather-app.PNG" alt="Eleni" />
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              Remember to buy
              <br />
              <br /> To do List created with React.
              <br />
              <br />
              Fully responsive as well.
            </CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Remember_To_Buy"
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

          {/*Project #5*/}
          <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            <img src="weather-app.PNG" alt="Eleni" />
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              My store
              <br />
              <br /> Angular application with components.
              <br />
              <br /> Starting learning Angular! Enjoying learning new things!
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
