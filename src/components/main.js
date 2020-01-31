import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import UtbildningDatakunskaper from './UtbildningDatakunskaper';
import Contact from './contact';
import Projects from './projects';
import Arbetslivserfarenhet from './Arbetslivserfarenhet';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/UtbildningDatakunskaper" component={UtbildningDatakunskaper}/>
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/Arbetslivserfarenhet" component={Arbetslivserfarenhet} />
    </Switch>
)

export default Main;