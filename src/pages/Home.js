import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from '../components/Card';
import CardBtn from "../components/CardBtn";
import CardText from '../components/CardText';
import Footer from '../components/Footer';
import oils from '../oils.json';

class Home extends Component {

  state = {
    oils
  }

  handleNavBtn = data => {
    let value = (data.target.getAttribute('value'));
    if(value === 'favorites') {
      let favFilter = this.state.oils.filter(oils => (oils.favorite !== false))
      console.log(favFilter)
      this.setState({oils: favFilter})
    }
    else {
      this.setState({oils: oils})
    }
  }

  handleBtnClick = item => {
    item.favorite = true
    console.log(item)
    this.setState(this.state.oils)
  };

  render() {

    return (
      <div>
        <Navbar onClick={(event) => this.handleNavBtn(event)}/>
        <Wrapper>
          <Hero backgroundImage="https://completehomespa.com/wp-content/uploads/2020/04/what-is-an-aromatherapy-diffuser.jpg">
            <h1>15 Essential Oil</h1>
            <h2>Diffuser Recipes</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-6 s-12 lg-4">
                {this.state.oils.map(item => (
                  <Card title={item.name} key={item.id}>
                    <CardText
                      oils={item.oils}
                      id={item.id}
                    />
                    <CardBtn
                      onClick={() => this.handleBtnClick(item)}
                      data-value={item.favorite ? 'favorite' : ''}
                    />
                  </Card>
                ))}
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default Home;
