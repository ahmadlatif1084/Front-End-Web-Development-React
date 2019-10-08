import React,{Component} from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';
import {DISHES} from '../shared/dishes';
class DishDetail extends Component{
constructor (props){
super(props);
this.state={
    dishDetail:null
}
}
onDishSelect(dish){
    this.setState(
        {dishDetail:dish}
        )
}

renderDish(dish) {
    if (dish!=null){
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
renderComments(comments){
   if(comments!=null){
       const comments_data=comments.comments.map((comments)=>{
          return(
              <ul class="list-group">
                  <li class="list-group-item">{comments.comment}</li>
                  <li class="list-group-item">{comments.author},
                       {new Intl.DateTimeFormat('en-GB', {
                          month: 'long',
                          day: '2-digit',
                          year: 'numeric',
                      }).format(new Date(comments.date))}
                  </li>
              </ul>

          );
       });
       console.log(this.state.dishDetail);
       return(
           <div>
               <h4>Comments</h4>
               {comments_data}
           </div>
       );
   }else{
       return (
           <div></div>
       );
   }
}
render(){
    const dishDetail=this.props.dishes.map((dish)=>{
        return(
            <div className="col-12 col-md-5 mt-5">
                <Card key={dish.id}
                      onClick={()=>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });
    console.log(dishDetail);
    return (
        <div className="container">
            <div className="row">
                {dishDetail}
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">{this.renderDish(this.state.dishDetail)}</div>
                <div className="col-md-6 col-sm-12">{this.renderComments(this.state.dishDetail)}</div>
            </div>
        </div>
    );
}
}

export default DishDetail;