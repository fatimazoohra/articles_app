import './App.css';
import React  , { Component } from "react";
import "./Style/bootstrap.min.css";

import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import NavBar from './Components/Navbar';

class App extends Component{
  state = {
    page:'xx'
  };
 handleClick(e){
    console.log('clicked...');
    console.log(e.target.props.name+'clicked...');
    this.setState({page:e.target.getAttribute('name')})
  }
    render(){
      console.log(this.state.page);
      return (
        <div className="App">
        <NavBar  clickHandel={this.handleClick} />
          <div style={{ marginLeft:'2rem', marginTop:'1rem'}}>
            <Switch >
              <Route path="/" component={Home} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles" component={ArticlesListPage} />

              <Route path='/article/:id' component={ArticlePage} />
            </Switch>
          </div>
        </div>
        );
      }
}

export default App;
 //{<NavBar  clickHandel={this.handleClick} />}
 /*
  {
            this.state.page==='Home'?<Home/> :
            this.state.page==='About'?<AboutPage/> :<AboutPage/>}
  */ 







  /*
  
class App extends Component{
  state = {
    page:'xx'
  };
 handleClick(e){
    console.log('clicked...');
    console.log(e.target.props.name+'clicked...');
    this.setState({page:e.target.getAttribute('name')})
  }
    render(){
      //console.log(this.state.page);
      return (
        <div className="App">
        
        <hr/>
        <NavBar  clickHandel={this.handleClick} />
          
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles" component={ArticlesListPage} />

              <Route path='/article/:id' component={ArticlePage} />
            </Switch>
          
        </div>
        );
      }
}
*/