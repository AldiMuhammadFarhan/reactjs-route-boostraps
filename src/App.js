import React from 'react';
import { Link } from 'react-router-dom';
import Utama from './Component/utama';
import { Navbar, Nav } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <hr />
        <Link to="/">Beranda</Link> |
        <Link to="/tentang">Tentang Saya</Link> |
        <Link to="/karya">Karya</Link> |
        <Link to="/kontak">Kontak</Link> <hr /> */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/#home">Aldi Muhammad Farhan</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Beranda</Link> |
            <Link to="/tentang">Tentang Saya</Link> |
            <Link to="/karya">Karya</Link> |
            <Link to="/kontak">Kontak</Link>
          </Nav>
        </Navbar>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
