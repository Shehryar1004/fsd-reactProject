import { useState } from 'react';
import CarouselBootstrap  from "react-bootstrap/Carousel";
import { Image } from 'react-bootstrap';
import CarouselImage1 from '../../assets/carousel_1.jpg';
import CarouselImage2 from '../../assets/carousel_2.jpg';
import CarouselImage3 from '../../assets/carousel_3.jpg';
import styles from './styles.module.css';

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <CarouselBootstrap className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
            <CarouselBootstrap.Item className={styles.carouselInner}>
                <Image className='img-fluid' src={CarouselImage1}/>
                <CarouselBootstrap.Caption>
                <h3>Cory House</h3>
                <p>"Code is like humor. When you have to explain it, it’s bad."</p>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item className={styles.carouselInner}>
                <Image className='img-fluid' src={CarouselImage2}/>
                <CarouselBootstrap.Caption>
                <h3>Thomas Fuchs</h3>
                <p>"The best error message is the one that never shows up."</p>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
            <CarouselBootstrap.Item className={styles.carouselInner}>
                <Image className='img-fluid' src={CarouselImage3}/>
                <CarouselBootstrap.Caption>
                <h3>John Johnson</h3>
                <p>"First, solve the problem. Then, write the code."</p>
                </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
        </CarouselBootstrap>
    )
}

export default Carousel;