import * as React from 'react';
// import Explore from './Explore';

import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


import "./css/style.css";
import "./css/responsive.css";
import "./css/style.scss";

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo1 from './images/logo.png';
import animal from './images/animal-img.png'
import forest from './images/forest-img.png';
import slider from './images/slider-img.png';
import aboutimg from './images/about-img.jpg';
import clientimg from './images/client.png';
import footer_animal1 from './images/footer-animal1.png';
import footer_animal2 from './images/footer-animal2.png';

import plus from './images/plus.png';
import fb from './images/fb.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import call from './images/call.png';
import mail from './images/mail.png';
// import map from './images/map.png';
import location from './images/location.png';



function Homepage() {
    return (
        <div>
            <div className="hero_area ">
                {/* <!-- header section strats --> */}
                <header className="header_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 col-lg-9">
                                <nav className="navbar navbar-expand-lg custom_nav-container">
                                    <a className="navbar-brand" href="index.html">
                                        <img src={logo1} alt="" />
                                    </a>
                                </nav>
                            </div>

                            <div className="col-md-4 col-lg-2">
                                <Nav className="justify-content-end" activeKey="/home">
                                    <Nav.Item>
                                        <Nav.Link style={{color: "white"}} href="/home">Home</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link style={{color: "white"}} href="/explore">Explore</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- end header section --> */}

                {/* <!-- slider section --> */}
                <section className="slider_section">
                    <button className="plus_btn">
                        <img src={plus} alt="" />
                    </button>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-lg-7">
                                <div className="img-box">
                                    <img src={slider} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="detail-box">
                                    <h1>
                                        Save Forest <br />
                                        <span>
                                            Save Life
                                        </span>
                                    </h1>
                                    <div className="btn-box">
                                        <a href="#" className="btn-1">
                                            Donate Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end slider section --> */}
            </div >

            {/* <!-- animal section --> */}

            < section className="animal_section layout_padding" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        Save Animals
                                    </h2>
                                </div>
                                <p>
                                Wildlife is a precious gift from God for this planet. The term "fauna" is not only for wild animals but also for all non-domesticated life forms including birds, insects, plants, fungi and even microscopic organisms. To maintain a healthy ecological balance on this land, animals, plants and marine species are as important as humans. Every organism on this earth has a unique place in the food chain that contributes to the ecosystem in its own way. But, unfortunately today, many animals and birds are endangered. </p>
                                <div className="btn-box">
                                    <a href="#" className="btn-1">
                                        Donate Now
                                    </a>
                                    <a href="#" className="btn-2">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={animal} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* <!-- end animal section --> */}




            {/* <!-- forest section --> */}

            <section className="forest_section layout_padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={forest} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        Save Forest
                                    </h2>
                                </div>
                                <p>
                                Forests are a major, requisite front of action in the global fight against catastrophic climate change— thanks to their unparalleled capacity to absorb and store carbon.</p>
                                <div className="btn-box">
                                    <a href="#" className="btn-1">
                                        Donate Now
                                    </a>
                                    <a href="#" className="btn-2">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="about_section layout_padding2-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-lg-9 mx-auto">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Forest
                                    </h2>
                                </div>
                                <p>
                                Sustainable forestry  the practice of regulating usage of forest resources in such a way that the forest wealth is preserved. Indiscriminate tree cutting is replaced by selective logging wherein you remove certain trees but preserve the balance of the woodland. Also young trees are allowed to mature before they are harvested, protected forests are created and trees are planted to expand forestlands. 
                                A sustainable forest contains trees of all ages and different species. </p>

<div className="btn-box">
                                    <a href="#" className="btn-2">
                                        Donate Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img src={aboutimg} alt="" />
                </div>
            </section>


            {/* <!-- end about section -->




            <!-- client section --> */}

            {/* <section className="client_section ">
                <button className="plus_btn">
                    <img src={plus} alt="" />
                </button>
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            What says Donators
                        </h2>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={clientimg} alt="" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                Carry Mork
                            </h6>
                            <h6 className="profession">
                                Business
                            </h6>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- end client section -->

            <!-- contact section --> */}

            <section className="contact_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 offset-md-1">
                            <div className="form_container">
                                <div className="heading_container">
                                    <h2>
                                        Request A Call back
                                    </h2>
                                </div>

                                <div style={{
                                    display: 'block',
                                    width: 700,
                                    padding: 30
                                }}>
                                    <Form>
                                        <Form.Group>

                                            <Form.Control type="text"
                                                placeholder="Your name" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="email"
                                                placeholder="Your email address" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="message"
                                                placeholder="Your message" />
                                        </Form.Group>


                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 px-0">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end contact section -->
          <!-- info section --> */}

            <section className="info_section  layout_padding2">
                <div className="footer_img fi1">
                    <img src={footer_animal1} alt="" />
                </div>
                <div className="footer_img fi2">
                    <img src={footer_animal2} alt="" />
                </div>
                <div className="container">
                    <div className="social_container">
                        <div className="social_box">
                            <a href="#">
                                <img src={fb} alt="" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="#">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="contact_items">
                        {/* <a href="#">
                            <div className="item ">
                                <div className="img-box ">
                                    <img src={location} alt="" />
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Location
                                    </p>
                                </div>
                            </div>
                        </a> */}
                        {/* <a href="#">
                            <div className="item ">
                                <div className="img-box ">
                                    <img src={call} alt="" />
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Call +01 1234567890
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="item ">
                                <div className="img-box ">
                                    <img src={mail} alt="" />
                                </div>
                                <div className="detail-box">
                                    <p>
                                        demo@gmail.com
                                    </p>
                                </div>
                            </div>
                        </a> */}
                    </div>
                </div>
                <div className="info_container ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 ">
                                <h6>
                                    About
                                </h6>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    Useful Link
                                </h6>
                                <div className="info_link-box">
                                    <ul>
                                        <li className="active">
                                        <Nav.Item>
                                        <Nav.Link style={{color: "white"}} href="/home">Home</Nav.Link>
                                    </Nav.Item>
                                        </li>
                                        {/* <li>
                                            <a href="about.html">
                                                About
                                            </a>
                                        </li> */}
                                        <li>
                                        <Nav.Item>
                                        <Nav.Link style={{color: "white"}} href="/explore">Explore</Nav.Link>
                                    </Nav.Item>
                                        </li>
                                        {/* <li>
                                            <a href="contact.html">
                                                Contact
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center">
                                <h6>
                                    Forest
                                </h6>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center">
                                <h6>
                                    Animals
                                </h6>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end info section -->


            <!-- footer section --> */}
            <section className="container-fluid footer_section ">
                <p>
                    &copy; <span id="displayDate"></span> 2022 All Rights Reserved.
                </p>
            </section>
            {/* <!-- end  footer section --> */}

            <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
            <script type="text/javascript" src="js/bootstrap.js"></script>
            <script type="text/javascript" src="js/custom.js"></script>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
            {/* <!-- End Google Map --> */}

        </div >
    );
}

export default Homepage;