import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconMenu, IconButton, Layout, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }
    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                     
                    {/*Project #1*/}
                    <Card shadow={5} style={{minWidth: '500' , marginTop: '80px', marginLeft: '50px'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background:'url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover', width: '200px', marginLeft: '80px'}}>
                        </CardTitle>
                        <CardText style={{fontSize: '30px'}}>Travel / website</CardText>
                        <CardActions border> 
                            {/*link till github*/}
                            <a href="https://github.com/eleniaslanidou89/TravelWebsite"  rel="noopener noreferrer" target="_blank">
                                   <Button colored>GitHub <i className="fab fa-github-square" aria-hidden="true" /></Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" style={{color: 'black'}} />

                            <Link style={{color: 'black' }} to="https://github.com/eleniaslanidou89/MyPortfolio"></Link>
                        </CardMenu>
                    </Card>
                    
                    {/*Project #2*/}
                    <Card shadow={5} style={{minWidth: '500' , marginTop: '80px', marginLeft: '50px'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background:'url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover',  width: '200px', marginLeft: '80px'}}></CardTitle>
                        <CardText style={{fontSize: '30px'}}>KYH / website</CardText>
                        <CardActions border> 
                            {/*link till github*/}
                            <a href="https://github.com/eleniaslanidou89/KYH"  rel="noopener noreferrer" target="_blank">
                                   <Button colored>GitHub <i className="fab fa-github-square" aria-hidden="true" /></Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" style={{color: 'black'}} />
                        </CardMenu>
                    </Card>
                    

                    {/*Project #3*/}
                    <Card shadow={5} style={{minWidth: '500' , marginTop: '80px', marginLeft: '50px'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background:'url(https://logos.textgiraffe.com/logos/logo-name/Eleni-designstyle-breeze-o.png) center/cover', width: '200px', marginLeft: '80px'}}></CardTitle>
                        <CardText style={{fontSize: '30px'}}>Quire / website</CardText>
                        <CardActions border> 
                             {/*link till github*/}
                             <a href="https://github.com/eleniaslanidou89/Quire"  rel="noopener noreferrer" target="_blank">
                                   <Button colored>GitHub <i className="fab fa-github-square" aria-hidden="true" /></Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" style={{color: 'black'}} />
                        </CardMenu>
                    </Card>

                </div>
           )    
        }
     else if(this.state.activeTab === 1){
        return(
            <div className="språk">
            <h1>Svenska</h1>
            <h2>goda kunskaper i tal och skrift</h2> <hr/>
            <h1>Engelska</h1>
            <h2>mycket goda kunskaper i tal och skrift</h2><hr/>
            <h1>Grekiska</h1>
            <h2>modersmål</h2><hr/>
            <h1>Ryska</h1>
            <h2>mycket goda kunskaper i tal</h2></div>
        )
        }
    }
    render() {
        return(
            <div className="category-tabs">
                <Layout> 
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                        <Tab style={{color: 'black'}}>Projekt</Tab>
                        <Tab style={{color: 'black'}}>Språkkunskaper</Tab>
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

export default Projects;