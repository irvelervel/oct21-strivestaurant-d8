import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import dishes from '../data/menu.json'

const Menu = () => (
    <Container>
        {
            dishes.map(dish => (
                <Row key={dish.id} className="justify-content-center my-3">
                    <Col md={6}>
                        <Link to={"/details/" + dish.id}>
                            <img src={dish.image} alt="pasta" />
                        </Link>
                        <h4>{dish.name}</h4>
                        <Badge variant="warning">{dish.price}</Badge>
                        <Badge variant="danger">{dish.label}</Badge>
                    </Col>
                </Row>
            ))
        }
    </Container>
)

export default Menu