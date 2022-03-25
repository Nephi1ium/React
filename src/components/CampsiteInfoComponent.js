
import React, {Component} from 'react'; 
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import Alert from 'reactstrap/lib/Alert';
import { Loading } from './LoadingComponent';

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const required = val => val && val.length;

    class CommentForm extends Component {     
        constructor(props) {
            super(props);

            this.state = {
                isModalOpen: false

            };
            this.toggleModal = this.toggleModal.bind(this);
        }


        toggleModal() {
            this.setState ({
                isModalOpen: !this.state.isModalOpen
            });
        }
        


        formSubmitted(values) {
            this.toggleModal();
            this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
            console.log("Current state is: " + JSON.stringify(values));
            alert("Current state is: " + JSON.stringify(values));
        }

    render(){
        return (
            <React.Fragment>
                <div>
                    <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />
                        Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Enter Stuff</ModalHeader>
                        <ModalBody>
                    <LocalForm onSubmit={values => this.formSubmitted(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Control.select 

                                        model=".rating" 
                                        id="rating" 
                                        name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                    >
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option> 
                                    <option value="3"> 3 </option> 
                                    <option value="4"> 4 </option> 
                                    <option value="5"> 5 </option>  
                                    </Control.select>
                            </div>

                            <div className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                    <Control.text type="text" model=".author" id="author" name="author"
                                        placeholder="Author"
                                        className="form-control"
                                        validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be at least 2 characters",
                                            maxLength: "Must be less than 15 characters"
                                        }}
                                    />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text" md={2}>Text</Label>
                                    <Control.textarea md={6} model=".text" id="text" name="text"
                                        placeholder="Text"
                                        className="form-control"

                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            component="div"

                                        />
                            </div>
                            <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </LocalForm>

                        </ModalBody>
                    </Modal>
                </div>
            </React.Fragment>
               
        );
    }
}

   function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        ); 
        
    }

    function RenderComments({comments, addComment, campsiteId}) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4> Comments </h4>
                    {comments.map(comment => <div key={comment.id}> <p> {comment.text} <br/>-- {comment.author},   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div>)}
                    <CommentForm campsiteId={campsiteId} addComment={addComment} />
                </div>
            );
        }
        return <div />

    }


    function CampsiteInfo(props) {
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        } 
    if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    />                    </div>
                </div>
            );
            
        } else {
            return    (
            <div>

            </div>
            );
        }
    }

                
export default CampsiteInfo;