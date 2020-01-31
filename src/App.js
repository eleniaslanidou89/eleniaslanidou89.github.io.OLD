import React, { Component }from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="demo-big-content">
            <Layout>
              <Header className='header-color' title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">My Portfolio</Link>} scroll>
                <Navigation>
                  <Link to="/Arbetslivserfarenhet" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Arbetslivserfarenhet</Link>
                  <Link to="/UtbildningDatakunskaper" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Utbildning-Datakunskaper</Link>
                  <Link to="/projects" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Projekt</Link>
                  <Link to="/contact" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Kontact</Link>
                </Navigation>
              </Header>

    <Drawer title={<Link style={{textDecoration: 'none', color: 'blue', fontSize: '25px', fontFamily: 'Dancing Script'}} to="/">Home</Link>} >
                  <Navigation>
                    <Link to="/Arbetslivserfarenhet" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Arbetslivserfarenhet</Link>
                    <Link to="/UtbildningDatakunskaper" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Utbildning-Datakunskaper</Link>
                    <Link to="/projects" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Projekt</Link>
                    <Link to="/contact" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}s>Kontact</Link>
                  </Navigation>
              </Drawer>

              <Content>
                <div className="page-content" />
                <Main/>
              </Content>
            </Layout>
          </div>
        </header>
      </div>
    );
  }
}

/* showing a loading indecator */
const Loading = () =>
<div>Loading ...</div>

export default App;
