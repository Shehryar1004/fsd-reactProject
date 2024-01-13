import { Container, Row, Col } from 'react-bootstrap';
import { Carousel, Card } from '../../components';
import styles from './styles.module.css';

import Cardimg1 from '../../assets/carousel_1.jpg'
import Cardimg2 from '../../assets/carousel_2.jpg'
import Cardimg3 from '../../assets/carousel_3.jpg'

const HomePage = () => {
    return(
        <>
            <Carousel />
            <Container className={styles.jumbotron}>
                <h2 className={styles.jumbotronHeading}>Hello World</h2>
                <p className={styles.jumbotronText}>Coding: where semi-colons wield immense power and a missing comma can lead to anarchy.</p>

                <hr />

                <p className={styles.jumbotronText}>Code is the language that bridges human ideas to digital reality, operating in precise instructions and logical sequences</p>
            </Container>

            <Container className='mb-5'>
                <Row>
                    <Col lg={'4'} className='d-flex justify-content-center mt-5'>
                        <Card 
                            title={'Algorithms and Data Structures'}
                            text={'Algorithms are step-by-step procedures or formulas for solving problems. Data structures are ways of organizing and storing data. Both are fundamental concepts in coding.'}
                            btnText={'Learn More'}
                            img={Cardimg1}
                        />
                    </Col>
                    <Col lg={'4'} className='d-flex justify-content-center mt-5'>
                        <Card 
                            title={'Syntax and Semantics'}
                            text={' Programming languages have rules (syntax) that must be followed for the code to be valid. Semantics refer to the meaning conveyed by the code.'}
                            btnText={'Learn More'}
                            img={Cardimg2}
                        />
                    </Col>
                    <Col lg={'4'} className='d-flex justify-content-center mt-5'>
                        <Card 
                            title={'Frameworks and Libraries'}
                            text={'Developers often use frameworks and libraries to streamline the coding process. These are pre-written code components that can be reused for common tasks.'}
                            btnText={'Learn More'}
                            img={Cardimg3}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage;