import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <Container className='review-body my-5'>
            <Row xs={1} md={2} lg={3} className="g-4">
                {reviews.map((review) => (
                    <Col key={review.id}>
                        <Card className='card h-100 shadow'>
                        <Card.Body className='d-flex justify-content-around align-items-center'>
                            <Card.Img  variant="top" src={review.profile_picture} />
                            <Card.Body className='p-0 text-center'>
                                <Card.Title className='fw-bold'>{review.name}</Card.Title>
                                <Card.Text className='fw-500'>{review.product_name}</Card.Text>
                                <Card.Subtitle className="mb-2 fw-bold">{review.ratings} out of 5</Card.Subtitle>
                            </Card.Body>
                        </Card.Body>
                            <Card.Body>
                                <Card.Title className='fw-bold'>{review.review_heading}</Card.Title>
                                <Card.Text className="">
                                    {review.review}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-end">Reviewed on {review.registered}</small>
                            </Card.Footer>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Reviews;