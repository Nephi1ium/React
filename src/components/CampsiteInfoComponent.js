
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


   function RenderCampsite({campsite}){
        // console.log("this one", props)
        // console.dir(campsite)
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        ); 
        
    }

   function RenderComments({comments}){
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4> Comments </h4>
                    {comments.map(comment => <div key={comment.id}> <p> {comment.text} <br/>-- {comment.author},   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div>)}
                    
                </div>
            );
        }
        <div>

        </div>
    }


function CampsiteInfo(props) {
    if (props.campsite) {
            // console.log("smile", this.props.campsite, this.props.campsite.comments);
        return(
        <div className="container">
            <div className="row">
                <RenderCampsite campsite={props.campsite}/>    
                <RenderComments comments={props.campsite.comments}/>
            </div>
        </div>
            
            );
            
        } else {
            // console.log("sad", this.props.campsite)
            return    (
            <div>

            </div>
            );
        }
    }

                
export default CampsiteInfo;