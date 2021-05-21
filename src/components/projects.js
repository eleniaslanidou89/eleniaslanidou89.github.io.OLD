import React, { Component } from "react";
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
  CardMenu,
  IconMenu,
  IconButton,
  Layout,
  Navigation,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project #1*/}
          <Card
            shadow={5}
            style={{ minWidth: "500", marginTop: "80px", marginLeft: "50px" }}
          > <a
                href="http://quire-project.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover",
                width: "200px",
                marginLeft: "80px",
              }}
            >
            </CardTitle> 
            </a>
            <CardText style={{ fontSize: "30px", fontFamily:"Segoe UI" }}>Quire / website</CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{" "}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              
            </CardActions>
          </Card>

          {/*Project #2*/}
          <Card
            shadow={5}
            style={{ minWidth: "500", marginTop: "80px", marginLeft: "50px" }}
          >
            <a
                href="http://bookstore-eleni.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
               
  
            <CardTitle
              style={{
                color: "#fff",
                height: "175px",
                background:
                  "url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover",
                width: "200px",
                marginLeft: "80px",
              }}
            ></CardTitle>
             </a>
            <CardText style={{ fontSize: "30px", fontFamily:"Segoe UI" }}>Bookstore / website</CardText>
            <CardActions border>
              {/*link for github*/}
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{" "}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>              
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="språk">
          <h1>Greek: Native </h1>
          <h1>Swedish: Upper-intermediate</h1>
          <h1>English: Proficient</h1>
          <h1>Russian: Proficient(only speaking)</h1>
        </div>
      );
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
            <Tab style={{ fontFamily:"Segoe UI", color: "black" }}>Projects</Tab>
            <Tab style={{ fontFamily:"Segoe UI", color: "black" }}>Languages</Tab>
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
    );
  }
}

export default Projects;
