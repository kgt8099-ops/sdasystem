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
import Logo from './Logo'; // 로고 컴포넌트 가져오기

function App() {
  return (
    <div className="App"> 
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-brain-with-a-hacker-in-the-center-29471-large.mp4"
            type="video/mp4"
          />
          브라우저가 HTML5 비디오를 지원하지 않습니다.
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
              <Nav.Link href="#home">홈</Nav.Link>
              <Nav.Link href="#services">고급 보안 솔루션</Nav.Link>
              <Nav.Link href="#services">고속 VPN</Nav.Link>
              <Nav.Link href="#services">차세대 Firewall</Nav.Link>
              <Nav.Link href="#about">회사 소개</Nav.Link>
              <Nav.Link href="#contact">문의하기</Nav.Link>
              <Nav.Link href="#contact">무료 상담 받기</Nav.Link>
              <Nav.Link href="#downloads">자료실</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero-section text-center text-white"> 
        <Container fluid>
          <h1 className="display-3">사이버 보안의 미래를 선도합니다</h1>
          <p className="lead">
            최첨단 보안 솔루션, VPN, Firewall 서비스를 통해 고객의 디지털 자산을 안전하게 보호합니다.
          </p>
          <Button variant="primary" size="lg" href="#contact">무료 상담 받기</Button>
        </Container>
      </header>

      <main>
        <section id="services" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4">우리의 서비스</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm d-flex flex-column">
                  <Card.Img variant="top" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body className="flex-grow-1">
                    <Card.Title>고급 보안 솔루션</Card.Title>
                    <Card.Text>
                      우리의 강력한 보안 솔루션은 위협을 사전에 탐지하고 무력화하여 24시간 내내 고객의 비즈니스를 안전하게 보호하도록 설계되었습니다.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm d-flex flex-column">
                  <Card.Img variant="top" src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body className="flex-grow-1">
                    <Card.Title>고속 VPN</Card.Title>
                    <Card.Text>
                      고속 암호화 VPN 서비스로 온라인 활동을 보호하고 데이터의 프라이버시와 익명성을 보장하세요.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm d-flex flex-column">
                  <Card.Img variant="top" src="https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body className="flex-grow-1">
                    <Card.Title>차세대 Firewall</Card.Title>
                    <Card.Text>
                      무단 액세스를 차단하고 의심스러운 활동을 감시하는 지능형 Firewall으로 네트워크를 보호하세요.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4">회사 소개</h2>
            <Row className="align-items-center">
              <Col md={6}>
                <h3>우리의 미션</h3>
                <p>
                  SDASYSTEM의 미션은 급변하는 디지털 세상에서 고객이 자신감을 가지고 비즈니스를 운영할 수 있도록 철통같은 보안 솔루션을 제공하는 것입니다. 우리는 모든 일에 있어 혁신, 탁월함, 정직함을 약속합니다.
                </p>
                <h3>우리의 비전</h3>
                <p>
                  우리는 모든 디지털 자산이 기본적으로 안전하고, 모든 규모의 기업이 사이버 위협에 대한 두려움 없이 성장할 수 있는 미래를 그립니다. 우리의 목표는 전 세계 고객들에게 가장 신뢰받는 사이버 보안 파트너가 되는 것입니다.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded" alt="우리 팀" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="downloads" className="py-5 bg-light"> 
          <Container fluid>
            <h2 className="text-center mb-4">자료실</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-file-pdf fa-3x text-primary"></i>
                    </div>
                    <Card.Title>제품 소개서</Card.Title>
                    <Card.Text>
                      SDASYSTEM의 모든 제품과 서비스에 대한 상세 정보를 확인하세요.
                    </Card.Text>
                    <Button variant="primary" href="#" download>
                      다운로드 <i className="fas fa-download ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-file-alt fa-3x text-success"></i>
                    </div>
                    <Card.Title>보안 백서</Card.Title>
                    <Card.Text>
                      최신 사이버 보안 위협과 방어 전략에 대한 심층 분석 자료입니다.
                    </Card.Text>
                    <Button variant="success" href="#" download>
                      다운로드 <i className="fas fa-download ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-file-word fa-3x text-info"></i>
                    </div>
                    <Card.Title>서비스 약관</Card.Title>
                    <Card.Text>
                      저희 서비스 이용과 관련된 법적 고지 및 약관을 확인하세요.
                    </Card.Text>
                    <Button variant="info" href="#" download>
                      다운로드 <i className="fas fa-download ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer id="contact" className="bg-dark text-white text-center py-5"> 
        <Container fluid>
            <h2 className="mb-4">문의하기</h2>
            <p className="lead mb-4">언제나 도와드릴 준비가 되어 있습니다. 무료 상담이나 궁금한 점이 있으시면 언제든지 문의해 주세요.</p>
            <Row>
                <Col md={4} className="mb-4">
                    <h4>주소</h4>
                    <p>123 Security Lane, Tech City, 12345</p>
                </Col>
                <Col md={4} className="mb-4">
                    <h4>이메일</h4>
                    <p>contact@sdasystem.com</p>
                </Col>
                <Col md={4} className="mb-4">
                    <h4>전화</h4>
                    <p>+1 (234) 567-890</p>
                </Col>
            </Row>
            <hr className="my-4" />
            <p>&copy; {new Date().getFullYear()} SDASYSTEM. 모든 권리 보유.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
