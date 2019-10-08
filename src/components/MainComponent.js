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
            <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dish)} />
            {/* filter function match each dish id with select dish id using arrow functions of ES6 */}
            <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
</div>
        );
    }

}


export default Main;
