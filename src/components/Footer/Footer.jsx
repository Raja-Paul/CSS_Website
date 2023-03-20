import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import aboutImg from "../../assests/images/m11.jpg";


import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Contacts",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "",
    url: "#",
  },
  {
    display: "We are CSS",
    url: "#",
  },

  {
    display: "We are CSE Student's Society ",
    url: "#",
  },

  {
    display: "We are NIT Durgapurians",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          
          <Col lg="3" md="6" className="mb-4">
          <div id="ww-100">
            <h3 className=" d-flex align-items-center gap-1">
            <img src={aboutImg} alt="" className="w-100"  /> 
            
            </h3>
            </div>
            <h6>CSS(CSE Student's Society)</h6> 

            

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com/profile.php?id=100089945320887">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/css_nitdgp/">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/company/css-nitdgp/">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
            
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">About Us</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: NIT Durgapur</p>
            <p> Phone: +91 9382432159 </p>
            <p>Email: mrpaulraja1@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
