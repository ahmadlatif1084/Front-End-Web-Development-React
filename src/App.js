import React,{Component} from 'react';
import {Card, Navbar, NavbarBrand} from 'reactstrap';
// import Menu from './components/MenuComponent';
import DishDetail from "./components/DishDetailComponent";
import {DISHES} from './shared/dishes';
import './App.css';
import Main from "./components/MainComponent";

class App extends Component{
  render(){
    return (
       <div>
         <Main/>
       </div>
    );
  }

}


export default App;
