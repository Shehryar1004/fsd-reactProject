import { Container, Row, Col, ProgressBar, Badge, Accordion } from 'react-bootstrap';
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

            <Container>
                <Row>
                    <Col lg={'5'} className={'mt-5'}>
                        <div className='d-flex align-items-center mt-2'>
                            <p style={{margin: '0 50px 0 0'}}>HTML: </p> 
                            <ProgressBar style={{flex: 1}} now={60} label={'60'}/>
                        </div>

                        <div className='d-flex align-items-center mt-2'>
                            <p style={{margin: '0 63px 0 0'}}>CSS: </p> 
                            <ProgressBar style={{flex: 1}} variant='warning' now={30} label={'30'}/>
                        </div>

                        <div className='d-flex align-items-center mt-2'>
                            <p style={{margin: '0 21px 0 0'}}>JavaScript: </p> 
                            <ProgressBar style={{flex: 1}} variant='danger' now={10} label={'10'}/>
                        </div>
                    </Col>

                    <Col lg={'2'} />

                    <Col lg={'5'}>
                        <Row className={'mt-5'}>
                            <Col xs={'6'}>
                                <div className='d-flex flex-column align-items-center'>
                                    Frontend <br />
                                    <Badge>100</Badge>
                                </div>
                            </Col>
                            <Col xs={'6'}>
                                <div className='d-flex flex-column align-items-center'>
                                    Backend <br />
                                    <Badge bg={'secondary'}>75</Badge>
                                </div>
                            </Col>
                        </Row>
                        <Row className={'mt-5'}>
                            <Col xs={'6'}>
                                <div className='d-flex flex-column align-items-center'>
                                    API <br />
                                    <Badge bg={'warning'}>50</Badge>
                                </div>
                            </Col>
                            <Col xs={'6'}>
                                <div className='d-flex flex-column align-items-center'>
                                    Database <br />
                                    <Badge bg={'danger'}>25</Badge>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className={'mt-5'}> 
                <Row>
                    <Col lg={'5'}>
                        <Accordion defaultActiveKey="0" alwaysOpen >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Python</Accordion.Header>
                                <Accordion.Body>
                                Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability, making it easier for programmers to express concepts in fewer lines of code compared to other languages.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>C++</Accordion.Header>
                                <Accordion.Body>
                                    C++ is a low-level, compiled programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability, making it easier for programmers to express concepts in fewer lines of code compared to other languages.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>HTML</Accordion.Header>
                                <Accordion.Body>
                                    HTML is a markup language for web
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    <Col lg={'2'}/>

                    <Col lg={'5'}>
                        <Accordion defaultActiveKey="0" alwaysOpen >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>HTML</Accordion.Header>
                                <Accordion.Body>
                                    HTML is a markup language for web
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Python</Accordion.Header>
                                <Accordion.Body>
                                Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability, making it easier for programmers to express concepts in fewer lines of code compared to other languages.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>C++</Accordion.Header>
                                <Accordion.Body>
                                    C++ is a low-level, compiled programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability, making it easier for programmers to express concepts in fewer lines of code compared to other languages.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage;