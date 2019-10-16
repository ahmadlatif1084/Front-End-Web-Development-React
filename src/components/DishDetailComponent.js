import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent';

function RenderDish({dish}) {
    console.log("Render Dish");
    console.log(dish);
    return (
        <div className="col-12 col-md-5 m-1">
        <Card>
        <CardImg src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
    );
}
function RenderComments({comments}){
   if(comments!=null){
       return(
           <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               <ul className="list-unstyled">
                   {comments.map((comments)=>{
                       return (
                        <li key={comments.id}>
                            <p>{comments.comment}</p>
                            <p>-- {comments.author}, {new Intl.DateTimeFormat('en-US', {
                          month: 'long',
                          day: '2-digit',
                          year: 'numeric',
                      }).format(new Date(comments.date))}</p>
                        </li>
                       );
                   })}
                   <li> <CommentForm/></li>
              </ul>
           </div>
       );
   }
}
    const DishDetail= (props) =>{    
    if(props.dish==null){
        return (
            <div></div>
        );
    }
    else{
       return (
           <div className="container">
         <div className="row">
                <Breadcrumb>

                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                        <h3>{props.dish.name}</h3>
                </div>
            </div>
           <div className="row">
               <RenderDish dish={props.dish}/>
               <RenderComments comments={props.comments}/>
           </div>
           </div>
       );
    }

    }


export default DishDetail;