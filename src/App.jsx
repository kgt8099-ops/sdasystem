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
import ParticlesBackground from './components/ParticlesBackground'; // 파티클 배경 컴포넌트 가져오기

function App() {

  const handleComingSoon = (e) => {
    e.preventDefault();
    alert('준비중입니다.');
  };

  return (
    <div> 
      <ParticlesBackground />
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">홈</Nav.Link>
              <NavDropdown title="서비스" id="basic-nav-dropdown">
                <NavDropdown.Item href="#services">최신 보안 솔루션</NavDropdown.Item>
                <NavDropdown.Item href="#services">안전하고 빠른 VPN</NavDropdown.Item>
                <NavDropdown.Item href="#services">차세대 Firewall</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="회사 소개" id="about-nav-dropdown">
                <NavDropdown.Item href="#about">회사 소개</NavDropdown.Item>
                <NavDropdown.Item href="#ceo-profile">대표 인사말</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고객 지원" id="customer-support-dropdown">
                <NavDropdown.Item href="#contact">문의하기</NavDropdown.Item>
                <NavDropdown.Item href="#contact">무료 상담 받기</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#downloads">제품소개서</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero-section text-center text-white"> 
        <Container fluid>
          <h1 className="display-3">우리는 기업의 자산과 보안을 책임지는<br />보안 컨설팅 회사입니다.</h1>
          <p className="lead">
            최적의 보안 솔루션 UTM,VPN,Firewall 판매/임대 서비스를 통해 고객의 디지털 자산을 안전하게 보호 합니다.
          </p>
          <Button variant="primary" size="lg" href="#contact">무료 상담 받기</Button>
        </Container>
      </header>

      <main>
        <section id="services" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4 text-white-bright">보안 솔루션 구매/임대 서비스</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm d-flex flex-column">
                  <Card.Img variant="top" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Card.Body className="flex-grow-1">
                    <Card.Title>최신 보안 솔루션</Card.Title>
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
                    <Card.Title>안전하고 빠른 VPN</Card.Title>
                    <Card.Text>
                      안전하고 빠른 암호화 VPN 서비스로 온라인 활동을 보호하고 데이터의 프라이버시와 익명성을 보장하세요.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm d-flex flex-column">
                  <Card.Img variant="top" src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
            <h2 className="text-center mb-4 text-white-bright">회사 소개</h2>
            <Row className="align-items-center">
              <Col md={6}>
                <h3 className="text-white-bright">우리의 미션</h3>
                <p className="text-white-bright">
                  SDASYSTEM의 미션은 급변하는 디지털 세상에서 고객이 자신감을 가지고 비즈니스를 운영할 수 있도록 철통같은 보안 솔루션을 제공하는 것입니다. 우리는 모든 일에 있어 혁신, 탁월함, 정직함을 약속합니다.
                </p>
                <h3 className="text-white-bright">우리의 비전</h3>
                <p className="text-white-bright">
                  우리는 모든 디지털 자산이 기본적으로 안전하고, 모든 규모의 기업이 사이버 위협에 대한 두려움 없이 성장할 수 있는 미래를 그립니다. 우리의 목표는 전 세계 고객들에게 가장 신뢰받는 사이버 보안 파트너가 되는 것입니다.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded" alt="우리 팀" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="ceo-profile" className="py-5 bg-white text-dark"> 
          <Container fluid>
            <h2 className="text-center mb-4">대표 인사말</h2>
            <Row className="align-items-center">
              <Col md={4} className="text-center">
                <img src="/ceo.jpg" className="img-fluid rounded-circle mb-3" alt="대표 사진" />
                <h4>김건태</h4>
                <p className="text-muted">CEO</p>
              </Col>
              <Col md={8}>
                <p>
                  안녕하십니까, SDA SYSTEM 대표 김건태입니다.<br />
                  20년 넘게 IT 분야에 몸담아오며, 저는 기술이 세상을 얼마나 빠르고 깊게 변화시키는지 직접 경험했습니다. 그리고 그 변화의 중심에서 ‘보안’과 ‘인공지능(AI)’의 융합이 미래의 핵심이 될 것이라 확신하게 되었습니다. 이러한 신념을 바탕으로, ‘Secure AI Innovation’이라는 철학 아래 SDA SYSTEM을 이끌고 있습니다.
                </p>
                <p>
                  SK E&S의 도시가스 안전 시스템부터 하나금융투자의 보안포털, 씨티은행의 그룹웨어에 이르기까지, 다양한 대형 프로젝트를 성공적으로 이끌며 얻은 귀중한 경험은 AI 기반의 정보보안을 강화하고 고객의 소중한 데이터를 안전하게 보호하는 시스템을 구축하는 데 든든한 밑거름이 되었습니다.
                </p>
                <p>
                  SDA SYSTEM은 단순히 위협을 막는 것을 넘어, 최신 AI 기술로 위협을 예측하고, 고객의 데이터를 더욱 안전하게 관리하며, 개인정보 유출을 원천적으로 방지하는 데 모든 역량을 집중하고 있습니다. 기술 혁신을 넘어, 윤리적이고 책임감 있는 AI 보안을 통해 고객과 사회로부터 신뢰를 얻는 것이 저의 가장 큰 목표입니다.
                </p>
                <p className="font-italic">
                  "안전하고 신뢰받는 AI 시대를 열어가는 길, SDA SYSTEM이 앞장서겠습니다. 첨단 기술과 굳건한 보안으로 지속 가능한 디지털 혁신을 만들어가겠습니다."
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="downloads" className="py-5"> 
          <Container fluid>
            <h2 className="text-center mb-4 text-white-bright">제품소개서</h2>
            <Row>
              <Col md={3} sm={6} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-shield-alt fa-3x text-danger"></i>
                    </div>
                    <Card.Title>FIREWALL</Card.Title>
                    <Card.Text>
                      네트워크를 보호하는 차세대 방화벽 솔루션 상세 자료입니다.
                    </Card.Text>
                    <Button variant="outline-danger" onClick={handleComingSoon}>
                      다운로드 <i className="fas fa-download ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-key fa-3x text-primary"></i>
                    </div>
                    <Card.Title>VPN</Card.Title>
                    <Card.Text>
                      안전한 원격 접속을 위한 가상 사설망(VPN) 기술 자료입니다.
                    </Card.Text>
                    <Button variant="outline-primary" onClick={handleComingSoon}>
                      다운로드 <i className="fas fa-download ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-project-diagram fa-3x text-success"></i>
                    </div>
                    <Card.Title>UTM</Card.Title>
                    <Card.Text>
                      통합 위협 관리(UTM) 시스템에 대한 포괄적인 안내서입니다.
                    </Card.Text>
                    <Button variant="outline-success" href="/Down/2025_브로슈어_AXGATE UTM_제품사양.pdf" download>
                      브로슈어 <i className="fas fa-download ms-2"></i>
                    </Button>
                    <Button variant="outline-success" href="/Down/제품소개서_AXGATE UTM 2025.pdf" download className="mt-2">
                      제품소개서 <i className="fas fa-download ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <i className="fas fa-lock fa-3x text-info"></i>
                    </div>
                    <Card.Title>SSL VPN</Card.Title>
                    <Card.Text>
                      보안 소켓 계층(SSL) VPN의 원리와 구현 방법을 다룹니다.
                    </Card.Text>
                    <Button variant="outline-info" href="/Down/2025_브로슈어_AXGATE SSL VPN.pdf" download>
                      브로슈어 <i className="fas fa-download ms-2"></i>
                    </Button>
                    <Button variant="outline-info" href="/Down/제품소개서_AXGATE SSL VPN.pdf" download className="mt-2">
                      제품소개서 <i className="fas fa-download ms-2"></i>
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
            <p className="lead mb-4">우리는 언제나 도와드릴 준비가 되어 있습니다 무료 상담이나 구매/임대 문의에 궁금한 점이 있으시면 언제든지 문의 주세요.</p>
            <Row>
                <Col md={4} className="mb-4">
                    <h4>주소</h4>
                    <p>경기도 용인시 기흥구 강남서로 9, 7층 케이256호</p>
                </Col>
                <Col md={4} className="mb-4">
                    <h4>이메일</h4>
                    <p>bts@sdasystem.com</p>
                </Col>
                <Col md={4} className="mb-4">
                    <h4>전화</h4>
                    <p>사무실 : 070-8925-4668</p>
                    <p>담당자 : 010-6811-9434</p>
                </Col>
            </Row>
            <hr className="my-4" />
            <p>&copy; 2023 SDASYSTEM. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
