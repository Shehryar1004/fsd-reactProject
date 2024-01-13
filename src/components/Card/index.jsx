import { Card as CardBootstrap, Button} from "react-bootstrap";

const Card = ({title, text, btnText, img}) => {
    return(
        <CardBootstrap style={{ width: '18rem' }}>
            <CardBootstrap.Img variant="top" src={img} style={{height: 200}} />
            <CardBootstrap.Body style={{display: 'flex', flexDirection: 'column'}}>
                <CardBootstrap.Title>{title}</CardBootstrap.Title>
                <CardBootstrap.Text style={{flex: 1}}>{text}</CardBootstrap.Text>
                <Button variant="primary">{btnText}</Button>
            </CardBootstrap.Body>
        </CardBootstrap>
    )
}

export default Card;