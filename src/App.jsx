import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import './App.css';
import Logo from './Logo'; // Import the Logo component

function App() {
  return (
    <div className="App"> 
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-brain-with-a-hacker-in-the-center-29471-large.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
      
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="Products & Services" id="products-nav-dropdown">
                <NavDropdown.Item href="#services">Advanced Security Solutions</NavDropdown.Item>
                <NavDropdown.Item href="#services">High-Speed VPN</NavDropdown.Item>
                <NavDropdown.Item href="#services">Next-Gen Firewall</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Company" id="company-nav-dropdown">
                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Support" id="support-nav-dropdown">
                <NavDropdown.Item href="#contact">Get a Free Consultation</NavDropdown.Item>
                <NavDropdown.Item href="#downloads">Downloads</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero-section text-center text-white"> 
        <Container fluid>
          <h1 className="display-3">Leading the Future of Cybersecurity</h1>
          <p className="lead">
            Providing cutting-edge security solutions, VPNs, and firewall
            services to protect your digital assets.
          </p>
          <Button variant="primary" size="lg" href="#contact">Get a Free Consultation</Button>
        </Container>
      </header>

      <main>
        <section id="services" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4">Our Services</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                   <Card.Img variant="top" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body>
                    <Card.Title>Advanced Security Solutions</Card.Title>
                    <Card.Text>
                      Our robust security solutions are designed to proactively
                      detect and neutralize threats, keeping your business safe
                      24/7.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body>
                    <Card.Title>High-Speed VPN</Card.Title>
                    <Card.Text>
                      Secure your online presence with our high-speed, encrypted
                      VPN service, ensuring your data remains private and
                      anonymous.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                   <Card.Img variant="top" src="https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body>
                    <Card.Title>Next-Gen Firewall</Card.Title>
                    <Card.Text>
                      Protect your network with our intelligent firewall that
                      blocks unauthorized access and monitors traffic for
                      suspicious activity.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4">About Us</h2>
            <Row className="align-items-center">
              <Col md={6}>
                <h3>Our Mission</h3>
                <p>
                  At SDASYSTEM, our mission is to provide impenetrable security solutions that empower our clients to operate with confidence in a rapidly evolving digital world. We are committed to innovation, excellence, and integrity in everything we do.
                </p>
                <h3>Our Vision</h3>
                <p>
                  We envision a future where digital assets are secure by default, where businesses of all sizes can thrive without the fear of cyber threats. Our goal is to be the most trusted partner in cybersecurity for our clients worldwide.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded" alt="Our Team" />
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer id="contact" className="bg-dark text-white text-center py-5"> 
        <Container fluid>
            <h2 className="mb-4">Contact Us</h2>
            <p className="lead mb-4">We're here to help. Reach out to us for a free consultation or any inquiries.</p>
            <Row>
                <Col md={4} className="mb-4">
                    <h4>Address</h4>
                    <p>123 Security Lane, Tech City, 12345</p>
                </Col>
                <Col md={4} className="mb-4">
                    <h4>Email</h4>
                    <p>contact@sdasystem.com</p>
                </Col>
                <Col md={4} className="mb-4">
                    <h4>Phone</h4>
                    <p>+1 (234) 567-890</p>
                </Col>
            </Row>
            <hr className="my-4" />
            <p>&copy; {new Date().getFullYear()} SDASYSTEM. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
