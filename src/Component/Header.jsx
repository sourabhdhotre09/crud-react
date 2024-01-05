import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">CRUD Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Create</NavLink>
                    <NavLink className="nav-link" to="/show-data">Show Data</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header