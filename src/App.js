import React, { Component }from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
/*import Button from './Button'; // Import a component from another file*/


const list = [
  {
    title: 'React1',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux2',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },];

function isSearched(searchTerm) {
  return function (item) {
    return !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}





// API KEY: APPID=f8384513fad5f91ea04d07a2cbf916ec
const API = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      pressure: '',
      humidity:''
     
    };
    
  }
  componentDidMount() {
    console.log("CDM ran")
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ temperature: data.main.temp,pressure: data.main.pressure,humidity: data.main.humidity}))
 
      
   
  }
  
  render() {
    const temperature = this.state.temperature;
    const pressure = this.state.pressure;
    const humidity = this.state.humidity;
   
   
  
    return (
      <div className="App">
      <header className="App-header">
        <div className="demo-big-content">
          <Layout>
            <Header className='header-color' title={<Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Sriracha' }} to="/">My Portfolio</Link>} scroll>
              <Navigation>
                <Link to="/Arbetslivserfarenhet" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Arbetslivserfarenhet</Link>
                <Link to="/UtbildningDatakunskaper" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Utbildning-Datakunskaper</Link>
                <Link to="/projects" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Projekt</Link>
                <Link to="/contact" style={{fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>Kontakt</Link>
                
                <div className='temperature'>Temperaturen är: {temperature || '?'}- Trycket är: {pressure || '?'} -Fuktighet är: {humidity || '?'}</div>
             
              <div className="page-content" />
              </Navigation>
            </Header>

           

  <Drawer title={<Link style={{textDecoration: 'none', color: 'blue', fontSize: '25px', fontFamily: 'Dancing Script'}} to="/">Home</Link>} >
                <Navigation>
                  <Link to="/Arbetslivserfarenhet" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Arbetslivserfarenhet</Link>
                  <Link to="/UtbildningDatakunskaper" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Utbildning-Datakunskaper</Link>
                  <Link to="/projects" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Projekt</Link>
                  <Link to="/contact" style={{color: 'black', fontSize: '25px', fontFamily: 'Dancing Script'}}>Kontakt</Link>
                  <div className='temperature'>Temperaturen är: {temperature || '?'}</div>
                  <div className='temperature'>Trycket är: {pressure || '?'}</div>
                <div className='temperature'>Fuktighet är: {humidity || '?'}</div>
                
                </Navigation>
  </Drawer>
            
            <Content>
             
              <Main/>
            </Content>
          </Layout>
        </div>
      </header>
    </div>
    
  );
}
}
     
       
       

export default App;
