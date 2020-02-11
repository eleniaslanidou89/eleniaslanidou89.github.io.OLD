import React, { Component } from 'react';
import { Grid, Cell, CardText, List, ListItem, ListItemContent, Layout } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Layout style={{background: 'url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)  center / cover'}}>
                    <Grid className="contact-grid"> 
                        <Cell className="title" col={6}>
                            <h2>Eleni Aslanidou</h2>
                                <img src="me.jpg" alt="Eleni" className="image2"/> 
                                <p>Mitt namn är Eleni Aslanidou. Jag är 30 år gammal och jag flyttade till Sverige förra sommaren.
                                    Jag är utexaminerad ingenjör inom IT och kommunikation.Som person är jag flexibel, arbetsam
                                    och anpassningsbar. Jag har tidigare arbetat sex månader som praktikant på ett grekiskt företag,
                                    Hellenic Telecommunications Organisation.

                                    Där jobbade jag i kundtjänsten som kundsupport för fel
                                    på internet och telefon. Min huvudsakliga uppgift var att vägleda kunder för att lösa deras
                                    telefon- och internet fel. Jag har också jobbat som privatlärare i både grekiska samt datavetenskap
                                    i fem år. Mitt mål är att jobba som webbutvecklare. <br/> <br/>
                                    Fyra ord som beskriver mig: <br/>
                                    flexibel<br/>
                                    arbetsam<br/>
                                    tålmodig<br/>
                                    ansvarsfull
                                </p>
                        </Cell>

                        <Cell className="title" col={6}>
                            <CardText>
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Dancing Script' }}>
                                            <i className="fa fa-phone-square" aria-hidden="true" /> Tel.: 0736395542<hr/></ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Dancing Script'}}>
                                            <i className="fa fa-envelope-open" aria-hidden="true" /> E-post: Helena.aslanidou@gmail.com<hr/></ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Dancing Script'}}>
                                            <i className="fa fa-map-marker-alt" aria-hidden="true" /> Adress: Skebokvarnsvägen 69 LGH1103 <br /> stockholm Bandhagen 12433<hr></hr></ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Dancing Script'}}>
                                            <i className="fab fa-skype" aria-hidden="true" /> eleni198989@gmail.com</ListItemContent>
                                    </ListItem>
                                </List>
                            </CardText>
                        </Cell>
                    </Grid>
                </Layout>
            </div>
        )
    }
}

export default Contact;