import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='banner'>
                <Container className=''>
                    <Row className='justify-items-center align-items-center'>
                        <Col sm={7} className='banner-details pe-5'>
                            <h1 className='banner-heading'>
                                {/* Plug it, listen to it, feel it */}
                                Good music is just a pair of
                                <br></br>
                                <span className='highlighted'>headphones </span>away
                            </h1>
                            <p className='banner-text'>A great pair of headphones is important in ensuring that you have a great listening experience, but not all of us can spend a fortune on a pair of headphones.
                                <br></br>
                                It can be a little hard to find budget-friendly headphones — which is exactly why we’ve put together the most helpful reviews here!</p>
                            <Button className='live-demo-btn'>Live Demo</Button>
                        </Col>
                        <Col sm={5} className="banner-image ps-3">
                            <Image src='/images/banner-1.png' alt='' fluid></Image>
                        </Col>
                    </Row>
                </Container>
                <section className='mt-5 pt-5'>
                    <h2 className='fw-bold text-center'>Customer Reviews</h2>
                    <Reviews limit={3}></Reviews>
                </section>
            </div>
        </div>
    );
};

export default Home;