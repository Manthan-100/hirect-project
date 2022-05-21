import { Card } from "react-bootstrap";

const SectionCard = ({ item }) => {
    const { url } = item.snippet.thumbnails.high;
    const { title, description } = item.snippet;
    return (
        <Card className="card-container">
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SectionCard;
