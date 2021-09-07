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
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '50px',
                paddingLeft: '50px',
              }}
            >
              Eleni's Blog
            </CardTitle>
            <img src="Elenis-Blog.PNG" alt="Blog" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            React website. I used React Hooks and React Router for this React JS
            Project. The website is fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, CSS
            <CardActions>
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
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',

                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '40px',
              }}
            >
              Weather App
            </CardTitle>
            <img
              src="weather-app.PNG"
              alt="WeatherApp"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            Weather app in React JS, I used the Open Weather Map API to make
            calls to a restful api to return the current weather data. The App
            is fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, API, CSS
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Weather-App"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the app*/}
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
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '60px',
              }}
            >
              Bookstore
            </CardTitle>
            <img
              src="Bookstore.PNG"
              alt="Bookstore"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            Website that has as a goal, making an end user able to browse within
            the available books.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, Next.js, Tailwind, API.
            <CardActions>
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
              {/*link for the website*/}
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
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '60px',
              }}
            >
              Calculator
            </CardTitle>
            <img
              src="Calculator.PNG"
              alt="calculator"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            A calculator app using Vue JS. The App is fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, Vue.js, CSS
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Vue.js_project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the app*/}
              <a
                href="https://calculatorvuejs.surge.sh/"
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
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '40px',
              }}
            >
              E-Commerce
            </CardTitle>
            <img
              src="E-commerce.PNG"
              alt="commerce"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            A complete eCommerce website. A fully functional eCommerce
            application using commerce.js.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, TypeScript
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/E-Commerce"
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
                href="https://commerce.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #6*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',

                fontWeight: 'bold',
                paddingRight: '10px',
                paddingLeft: '20px',
              }}
            >
              Remember To Buy
            </CardTitle>
            <img
              src="RememberToBuy.PNG"
              alt="ToDoList"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            A To do App which reminds what products should the user buy.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, CSS
            <CardActions>
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
              {/*link for the app*/}
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
          {/* <Card
            shadow={5}
            style={{ minWidth: '500', marginTop: '80px', marginLeft: '50px' }}
          >
            <img src="MyStore.PNG" alt="Eleni" className="project-image" />
            <CardText style={{ fontSize: '20px', fontFamily: 'Segoe UI' }}>
              <CardText
                style={{
                  fontSize: '20px',
                  fontFamily: 'Segoe UI',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                My store
              </CardText>
              <br /> Angular application with components.
              <br /> Starting learning Angular! Enjoying learning new things!
            </CardText>
            <CardActions border>
              
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
         */}
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
