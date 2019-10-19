import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Row,Col,Modal,ModalBody,ModalHeader,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
const required= (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <=len);
const minLength= (len) => (val) => !(val) || (val.length >=len);
class CommmentForm extends Component{
constructor(props){
super(props);
this.state={
isModalOpen:false
};
this.toggleModal=this.toggleModal.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(values){
    console.log("Current State is " + JSON.stringify(values));
    alert("Current State is " + JSON.stringify(values));
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

};

export default CommmentForm;