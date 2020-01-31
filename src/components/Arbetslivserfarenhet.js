import React, { Component } from 'react';
import { Grid, Cell, CardText, Layout } from 'react-mdl';

class Arbetslivserfarenhet extends Component {
    render() {
        return(
            <div className="arbetslivserfarenhet">
                <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                    <h1>Arbetslivserfarenhet</h1>
                        <Grid>
                            <div className="arbetslivserfarenhet-list" >
                                <CardText style={{fontSize: '20px', color: 'black' }}>08/2019-09/2019 <br/>
                                    <div className="erfarenhet-social-links">Exekutive Assistant – Jobb & Tillväxtcenter 
                                        {/*link*/}
                                        <a href="https://jobbtillvaxtcenter.se/" rel="noopener noreferrer" target="_blank">
                                            <i class="fas fa-link" aria-hidden="true" />
                                        </a>
                                    </div>
                                </CardText>     

                                <CardText style={{fontSize: '20px', color: 'black' }}> 01/2019- 06/2019 <br/>
                                    <div className="erfarenhet-social-links">Vikarie | Klax Hälsoförkolan Friskus AB, Sverige Huddinge
                                        {/*link*/}
                                        <a href="https://www.klax.se/vara-forskolor/friskus/" rel="noopener noreferrer" target="_blank">
                                            <i class="fas fa-link" aria-hidden="true"/>
                                        </a>
                                    </div>
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 09/2013–5/2018 <br/>
                                    Privatlärare i grekiska språk och datavetenskap| (privatlektioner), Grekland
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}>04/2012–10/2012 <br/>
                                    <div className="erfarenhet-social-links">Datateknik Kundtjänst-Praktik | Hellenic Telecommunications Organisation (OTE S.A.), Grekland 
                                        {/*link*/}
                                        <a href="https://www.cosmote.gr/cs/otegroup/en/omilos_ote.html" rel="noopener noreferrer" target="_blank">
                                            <i class="fas fa-link" aria-hidden="true" />
                                        </a>
                                    </div> 
                                </CardText>

                                <CardText style={{fontSize: '20px', color: 'black' }}> 09/2007-10/2007 <br/>
                                    <div className="erfarenhet-social-links">Receptionist | IKTEO (MOT), Thessaloniki
                                        {/*link*/}
                                        <a href="http://www.ikteokinisi.gr/" rel="noopener noreferrer" target="_blank">
                                            <i class="fas fa-link" aria-hidden="true" />
                                        </a>
                                    </div>  
                                </CardText>
                                
                            </div> 
                        </Grid>
                </Layout>
            </div>
        )
    }
}

export default Arbetslivserfarenhet;