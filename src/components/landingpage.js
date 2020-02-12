import React, { Component } from 'react';
import { Grid, Cell, Layout } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div  className="container" style={{width: '100%', margin: 'auto'}}>
                <Layout className="backgroundImage">
                    <Grid className="landing-grid">
                        <Cell col={15}> 
                            <img src="me.jpg" alt="Eleni" className="image"/>  
                        </Cell> 
                        <div className="banner-text">
                            <h1>Eleni Aslanidou<br/>Ingenjör inom IT och kommunikation</h1>
                            <hr/>
                            <h3>HTML5/CSS | Bootstrap | React | Javascript | Adobe Photoshop</h3>
                            <div className="social-links">
                                {/*linkedIn*/}
                                <a href="https://www.linkedin.com/in/eleni-aslanidou/"  rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*GitHub*/}
                                <a href="https://github.com/eleniaslanidou89"  rel="noopener noreferrer" target="_blank">
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

export default Landing;