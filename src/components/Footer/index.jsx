import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

import fb from '../../assets/fb_icon.gif';
import gl from '../../assets/google_icon.gif';
import li from '../../assets/linked_icon.gif';
import tw from '../../assets/twitter_icon.gif';

const Footer = () => {
    return(
        <div className="mt-5" style={{backgroundColor: '#1e1e1e'}}>
            <Container className={'text-white'}>
                <Row>
                    <Col md={'3'} className="mt-5">
                        <h3>Contact</h3>
                        <p>Shehryar Ahmed</p>
                        <p>shehryar@gmail.com</p>
                        <p>0123467890</p>
                    </Col>
                    <Col md={'5'} className="mt-5">
                        <ul className={styles.navlist}>
                            <li><Link to={'/'} className={styles.navlink}>Home</Link></li>
                            <li><Link to={'/blog'} className={styles.navlink}>Blog</Link></li>
                            <li><Link to={'/contact'} className={styles.navlink}>Contact Us</Link></li>
                            <li><Link to={'/about'} className={styles.navlink}>About Us</Link></li>
                        </ul>
                    </Col>
                    <Col md={'4'} className="mt-5 d-flex justify-content-sm-between align-items-center">
                    <a href="https://www.facebook.com">
                        <img style={{maxWidth: 25, height: 25}} src={fb}/>
                    </a>
                    <a href="https://www.google.com">
                        <img style={{maxWidth: 25, height: 25}} src={gl}/>
                    </a>
                    <a href="https://www.linkedin.com">
                        <img style={{maxWidth: 25, height: 25}} src={li}/>
                    </a>
                    <a href="https://twitter.com">
                        <img style={{maxWidth: 25, height: 25}} src={tw}/>
                    </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;