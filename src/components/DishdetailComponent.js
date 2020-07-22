import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-sm-12 col-md-5 mt-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>     
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const dishComment = comments.map((comment) => {
                return (
                    <div key={comment.id}>    
                        <li>{comment.comment}</li>
                        <li>--{comment.author} , {comment.date}</li>
                    </div>
                );
            });

            return(
                <div className="col-sm-12 col-md-5 mt-1">
                    <h4>Comment</h4>
                    <ul className="list-unstyled">
                        {dishComment}
                    </ul>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
    }
}

export default DishDetail;