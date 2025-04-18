import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles/CustomNavbar.module.css'; // Import custom styles

export default function CustomNavbar() {

    return (
        <Navbar className={styles.customNavbar} expand="lg">
            <Container>
                <Navbar.Brand className={styles.navbarBrand}>IQ Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/statistics" className={styles.navLink}>Statistics</Nav.Link>
                        <Nav.Link as={Link} to="/donate" className={styles.navLink}>Donate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
