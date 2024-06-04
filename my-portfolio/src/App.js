import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Card, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import * as THREE from 'three';
import profileImage from './hack.jpg';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 10;

    const animate = function () {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.getElementById('three-container').removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="App">
      <div id="three-container" className="three-container"></div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Julius Otto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
              <Nav.Link href="#portfolio">Portfólio</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">
        <header className="header text-center py-5 my-5">
          <Container>
            <Row className="align-items-center">
              <Col md={4}>
                <img src={profileImage} alt="Julius Otto" className="profile-image img-fluid rounded-circle" />
              </Col>
              <Col md={8}>
                <h1 className="display-4">Julius Otto</h1>
                <p className="lead">Desenvolvedor de Softwares</p>
              </Col>
            </Row>
          </Container>
        </header>
        <Container>
          <section id="sobre" className="my-5">
            <h2 className="section-title">Sobre Mim</h2>
            <p>
              Sou Julius Otto, um desenvolvedor de softwares com experiência em diversas tecnologias, incluindo RPA, Python, VBA, Java e C#. Tenho um forte interesse em eficiência operacional e resultados concretos. Atualmente, estou focado em projetos que envolvem automação de processos e desenvolvimento de software para otimização de negócios.
            </p>
            <p>
              Minhas competências técnicas incluem:
              <ul>
                <li>RPA e automação com experiência em UiPath</li>
                <li>Proeficiência em Python, VBA, Java e C#</li>
                <li>Desenvolvimento web e mobile com CSS, HTML, JavaScript, Bootstrap, Angular e Xamarin</li>
                <li>Análise de dados e banco de dados com Python, Power BI, Excel avançado e SQL</li>
              </ul>
            </p>
            <p>
              Minha formação inclui cursos da Hashtag Treinamentos, FIAP, FURB, e Entra21, e tenho uma especialização em RPA e ferramentas de Python. Sou fluente em português e alemão, e estou sempre buscando novas oportunidades para aplicar e expandir minhas habilidades em desenvolvimento de software.
            </p>
          </section>
          <section id="portfolio" className="my-5">
            <h2 className="section-title">Portfólio</h2>
            <Row>
              <Col md={4}>
                <Card className="my-3 bg-secondary text-white card-hover">
                  <Card.Body>
                    <Card.Title>Projeto de Automação de Processos</Card.Title>
                    <Card.Text>
                      Desenvolvi um projeto utilizando UiPath para automatizar processos repetitivos em uma empresa, resultando em uma economia significativa de tempo e recursos.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/devjuliusotto/automacao-processos">Ver no GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="my-3 bg-secondary text-white card-hover">
                  <Card.Body>
                    <Card.Title>Sistema de Gerenciamento de Estoque</Card.Title>
                    <Card.Text>
                      Criei um sistema de gerenciamento de estoque usando Java e SQL, que ajudou a melhorar a eficiência do controle de inventário em uma loja de varejo.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/devjuliusotto/gerenciamento-estoque">Ver no GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="my-3 bg-secondary text-white card-hover">
                  <Card.Body>
                    <Card.Title>Aplicativo Mobile de Controle de Tarefas</Card.Title>
                    <Card.Text>
                      Desenvolvi um aplicativo mobile com Xamarin para ajudar usuários a gerenciar suas tarefas diárias de forma mais eficiente.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/devjuliusotto/controle-tarefas">Ver no GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* mais projetos aqui  */}
          </section>
          <section id="contato" className="my-5">
            <h2 className="section-title">Contato</h2>
            <p>
              Você pode me encontrar no <a href="https://github.com/devjuliusotto" target="_blank" rel="noopener noreferrer">GitHub</a>, no <a href="https://www.linkedin.com/in/juliusotto" target="_blank" rel="noopener noreferrer">LinkedIn</a> ou enviar um e-mail para <a href="mailto:seuemail@example.com">seuemail@example.com</a>.
            </p>
          </section>
        </Container>
        <footer className="bg-dark text-white text-center py-3">
          <p>&copy; 2024 Julius Otto. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
