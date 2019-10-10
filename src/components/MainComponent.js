import React,{Component} from 'react';
import {Card, Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import {DISHES} from '../shared/dishes';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
        };
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }
    render(){
        return (
<div>
            <Menu dishes={this.state.dishes} />
        
</div>
        );
    }

}


export default Main;
