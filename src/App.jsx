import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import './App.css';
import Logo from './Logo'; // We will create this component next

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
            SDASYSTEM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="hero-section text-center text-white"> 
        <Container fluid>
          <h1 className="display-3">Leading the Future of Cybersecurity</h1>
          <p className="lead">
            Providing cutting-edge security solutions, VPNs, and firewall
            services to protect your digital assets.
          </p>
          <Button variant="primary" size="lg">Get a Free Consultation</Button>
        </Container>
      </header>

      <main>
        <section id="services" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4">Our Services</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
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
      </main>

      <footer className="bg-dark text-white text-center py-3"> 
        <Container fluid>
          <p>&copy; {new Date().getFullYear()} SDASYSTEM. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
