import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <NavbarBootstrap expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBootstrap.Brand href="/">
                    <Image 
                        src={logo}
                        className='img-fluid'
                        width={40}
                        height={40}
                    />
                </NavbarBootstrap.Brand>
                <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBootstrap.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                <Form inline>
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                    </Row>
                </Form>
                </NavbarBootstrap.Collapse>

            </Container>
        </NavbarBootstrap>
    )
}

export default Navbar;