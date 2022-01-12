import { Col, Container, Row } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import dishes from '../data/menu.json'

const Details = () => {

    const params = useParams()
    // params is ALWAYS going to be an object!
    console.log('PARAMS!!', typeof params.pastaId)

    const [pasta, setPasta] = useState(null)
    // if the pasta is still loading, we'll get pasta === null
    // but if the pasta is not been found, .find() is going to return undefined
    // pasta will be truthy finally if the right object has been found

    useEffect(() => {
        // I have the pastaId in the url! let's grab it back with params
        const pastaId = params.pastaId
        const pastaDish = dishes.find(pasta => pasta.id.toString() === pastaId)
        // pastaDish now hopefully is an object with all the details about the right pasta I clicked on!
        console.log(pastaDish)
        setTimeout(() => {
            setPasta(pastaDish)
        }, 1000)
    }, [])


    // initially I check if the .find() method has failed, that means pasta is undefined
    // if it has not failed, it can be null (initial value, so still loading) or a valid pasta
    // I then check if pasta is truthy: if that's the case, show the pasta details
    // otherwise show a loading message/spinner/loader...
    return (
        <Container>
            {
                typeof pasta === 'undefined'
                    ? (
                        <h1>404 - PASTA NOT FOUND</h1>
                    )
                    : pasta
                        ? (
                            <Row>
                                <Col>
                                    <img src={pasta.image} alt="pasta" />
                                    <h2>{pasta.name}</h2>
                                    <p>{pasta.description}</p>
                                    <strong>{pasta.price}€</strong>
                                </Col>
                            </Row>
                        )
                        : <h1>LOADING...</h1>
            }
        </Container>
    )
}

export default Details