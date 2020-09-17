import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from '../components/Card';
import oils from '../oils.json';

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>15 Essential Oil</h1>
        <h2>Diffuser Recipes</h2>
      </Hero>

      <Container style={{ marginTop: 30 }}>
        <Row >
          <Col size="md-6 s-12 lg-4">

            {oils.map(item => (
              <Card 
                key={item.id}
                title = {item.name}
                ingredients = {item.oils}
                id = {item.id}
              />
            ))}

          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Home;
