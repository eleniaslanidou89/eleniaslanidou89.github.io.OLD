import React, { Component } from 'react';
import { Grid, Cell, CardText, Layout } from 'react-mdl';
import { Link } from 'react-router-dom';

class UtbildningDatakunskaper extends Component {
    render() {
        return(
            <div className="utbildning">
                <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                    <h1>Utbildning-Datakunskaper</h1>
                    <Grid>  
                        <div className="utbildning-list" >
                                <CardText style={{fontSize: '20px', color: 'black' }}> 27/8/2019- nu <br/> 
                                 KYH | Sverige Front-end Developer 
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 27/5/2019- 28/6/2019 <br/> Nti skolan | Sverige
                                            Kurs: Webbutveckling 1 
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 20/8/2018-15/3/2019 <br/> C3L skola | Sverige
                                            Kurs: SFX-IT svenska för programmerare -Svenska(SVA 1)-Java
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 2/7/2018-17/8/2018 <br/> Folkuniversitetet | Sverige
                                            Kurs: Svenska B2 + C1 & B2-
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 10/2016–11/2016 <br/> Certifierad Först Aid Provider (CFAP) | Grekland
                                            Kunskap och färdigheter inom området "Första hjälpen"
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 07/2016–09/2016 <br/> Förskole utbildningsprogram | Grekland
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 02/2008–04/2013 <br/> Technological Educational Institute of Central Macedonia |
                                            Ingenjör inom IT och Kommunikation-Högskola (4 år) | Grekland
                                </CardText>
                        </div>
                    </Grid>
                </Layout>
            </div> 
        )
    }
}

export default UtbildningDatakunskaper;