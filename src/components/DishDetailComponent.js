import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';


function renderDish(dish) {
    if (dish!=null){
        return (
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
function renderComments(comments){
   if(comments!=null){
       const comments_data=comments.map((comments)=>{
          return(
              <ul class="list-group">
                  <li class="list-group-item">{comments.comment}</li>
                  <li class="list-group-item">{comments.author},
                       {new Intl.DateTimeFormat('en-US', {
                          month: 'long',
                          day: '2-digit',
                          year: 'numeric',
                      }).format(new Date(comments.date))}
                  </li>
              </ul>
            
          );
       });
       return(
           <div className="col-12 col-md-5 m-1">
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
    const DishDetail= (props) =>{    
    const dish=props.dish;
    if(dish==null){
        return (
            <div></div>
        );
    }
    else{
       const dishitem=renderDish(dish);
       const commentItem=renderComments(dish.comments);
       return (
           <div className="container">
           <div className="row">
               {dishitem}
               {commentItem}
           </div>
           </div>
       );
    }

    }


export default DishDetail;