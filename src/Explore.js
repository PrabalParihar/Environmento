import * as React from 'react';
// import Header from './Header';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import "./css/style.css";
import "./css/responsive.css";
import "./css/style.scss";

import logo1 from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Explore() {
    return (

        <div>
            <header className="header_section" style={{background:'black'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <nav className="navbar navbar-expand-lg custom_nav-container">
                                <a className="navbar-brand" href="/">
                                    <img src={logo1} alt="" />
                                </a>
                            </nav>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="/explore">Explore</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className='d-flex justify-content-center' style={{ padding: '20px 20px' }}>
                <h1>Explore</h1>
            </div>
            <block style={{ padding: '100px 100px' }}>
                <CardGroup style={{ margin: '100px 100px' }}>
                    <Card style={{ padding: '10px 10px' }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ padding: '10px 10px' }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card style={{ padding: '10px 10px' }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </block>

        </div >
    )
}

export default Explore;