import { Container, Row, Col } from 'react-bootstrap'
import Reservations from './Reservations'
import ReservationForm from './ReservationForm'

const Booking = () => (
    <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <ReservationForm />
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <Reservations />
            </Col>
        </Row>
    </Container>
)

export default Booking