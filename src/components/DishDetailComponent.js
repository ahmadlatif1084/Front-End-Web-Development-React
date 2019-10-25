import React,{Component} from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,BreadcrumbItem,Breadcrumb,Row,Col,Modal,ModalBody,ModalHeader,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';
const required= (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <=len);
const minLength= (len) => (val) => !(val) || (val.length >=len);
// import CommentForm from './CommentFormComponent';


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
        isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        }
        handleSubmit(values){
         this.toggleModal();
         this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
        }
        toggleModal(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            });
        }
         
        
        
        render(){
        return (
                   <div>
                   
                   <button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>Submit Comment
                    </button>
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
        <div className="col-md-12">
        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
            <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                    Rating
                </Label>
                <Col>
                <Control.select md={12} model=".rating" name="rating" id="rating" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Control.select>
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="author" md={12}>
                Author
                </Label>
                <Col>
                    <Control.text  md={12} model=".author" id="author" name="author" placeholder="Author Name" className="form-control"
                    validators={{
                        required,
                        minLength:minLength(3),
                        maxLength:maxLength(15)
                    }}
                    />
                    <Errors className="text-danger" model=".author" show="touched"
                    messages={{
                        required:'Required',
                        minLength:'Must be greater than 2 characters',
                        maxLength:'Must be less than 15 characters'
                    }}></Errors>
                </Col>
            </Row>
        
            <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                    Comment
                    </Label>
                    <Col>
                    <Control.textarea md={12} model=".comment" id="comment" name="comment" placeholder="Comment here" rows="6" cols="40"
                    validators = {{
                        required,
                        minLength:minLength(3),
                        maxLength:maxLength(15)
                    }}/>
        
        <Errors className="text-danger" model=".comment" show="touched"
                    messages={{
                        required:'Required',
                        minLength:'Must be greater than 2 characters',
                        maxLength:'Must be less than 15 characters'
                    }}></Errors>
                    </Col>
            </Row>
            <Row className="form-group">
        <button type="submit" color="primary">
        Send Comment
        </button>
            </Row>
        
        </LocalForm>
        </div>
        </ModalBody>
        </Modal>
        </div>
        );
        }
}


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
function RenderComments({comments,addComment,dishId}){
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
                   <li> <CommentForm dishId={dishId} addComment={addComment}/></li>
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
               <RenderComments comments={props.comments}
                 addComment={props.addComment}
                 dishId={props.dish.id}/>
           </div>
           </div>
       );
    }

    }


export default DishDetail;