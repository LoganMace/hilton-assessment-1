import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import background from './Assets/background.png';
import hotel from './Assets/hotelexterior.jpg';
import logo from './Assets/Hilton_logo.png';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <Button>&lt; Back</Button>
          <Title>Hotel Details</Title>
          <Logo src={logo} alt="Hilton Logo"/>
        </Header>
        <Main>
          <Photo src={hotel} alt="Hilton Chicago"/>
          <Info>
            <p style={{fontWeight: "bold"}}>Hilton Chicago</p>
            <p style={{color: "lightblue", paddingTop: "4px", paddingBottom: "4px" }}>720 South Michigan Avenue<br/>Chicago, Illinois, 60605</p>
            <a href="tel:+1-312-922-440" style={{color: "white"}}>1-312-922-440</a>
          </Info>
          <Links>
            <Link>
              <p>Map</p>
              <p>&gt;</p>
            </Link>
            <Link>
              <p>Photo gallery</p>
              <p>&gt;</p>
            </Link>
            <Link>
              <p>Amenities</p>
              <p>&gt;</p>
            </Link>
          </Links>
        </Main>
      </Fragment>
    );
  }
}

export default App;

// Styled Components vvvvvvv

const Header = styled.header`
  height: 50px;
  width: 100%;
  background-color: #343840;
  display: flex;
  align-items: center;
  position: fixed;
  border-bottom: solid 1px grey;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 70%;
  width: 70px;
  background: linear-gradient(grey, black);
  color: white;
  border-radius: 5px;
  border-color: grey;
  margin-left: 10px;
  font-weight: bold;
  font-size: 1em;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
`;

const Logo = styled.img`
  height: 90%;
`;

const Main = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Photo = styled.img`
  width: 85vw;
  height: auto;
  margin-top: 75px;
  border: solid 3px white;
`;

const Info = styled.div`
  width: 85vw;
  margin-top: 25px;
  color: white;
`;

const Links = styled.ul`
  color: navy;
  width: 85vw;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 25px;
`;

const Link = styled.li`
  height: 50px;
  background: linear-gradient(0deg, rgba(226,241,255,1) 0%, rgba(255,255,255,1) 100%);
  border-bottom: solid 1px white;
  border-top: solid 1px lightgrey;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: bold;
  justify-content: space-between;
  &:hover {
    background: linear-gradient(0deg, rgba(183,211,237,1) 0%, rgba(226,241,255,1) 100%);
  }
`;