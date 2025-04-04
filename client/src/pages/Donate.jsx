import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import btcAddress from '../imgs/btc_address.png';
import ethAddress from '../imgs/lightning_address.jpeg';

function DonatePage() {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => { });
    }

    return (
        <Container
            fluid
            style={{
                minHeight: '100vh',
                backgroundColor: '#000',
                padding: '20px'
            }}
        >
            {/* 1) align-items-stretch ensures all columns match height. 
          2) g-4 gives grid spacing. */}
            <Row className="justify-content-center g-4 align-items-stretch">

                {/* First Card */}
                <Col xs={12} sm={6} md={4} lg={3}>
                    {/* h-100, d-flex, and flex-column let the card fill the column height. */}
                    <Card className="h-100 d-flex flex-column">
                        <Card.Img variant="top" src={btcAddress} style={{ width: '100%', height: 'auto' }} />
                        <Card.Body className="flex-grow-1">
                            <Card.Title style={{ color: 'orange', fontWeight: 'bold' }}>Bitcoin</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                bc1qrhmkvu50q2k8z9zj07h6mj4x4spa094lc0rzp8
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => copyToClipboard('bc1qrhmkvu50q2k8z9zj07h6mj4x4spa094lc0rzp8')}
                                    style={{ marginLeft: '8px' }}
                                >
                                    Copy
                                </Button>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Thank you!</small>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Second Card */}
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100 d-flex flex-column">
                        <Card.Img variant="top" src={ethAddress} style={{ width: '100%', height: 'auto' }} />
                        <Card.Body className="flex-grow-1">
                            <Card.Title style={{ color: '#3F88C5', fontWeight: 'bold' }}>Lightning</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                blockbyblock@walletofsatoshi.com
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => copyToClipboard('blockbyblock@walletofsatoshi.com')}
                                    style={{ marginLeft: '8px' }}
                                >
                                    Copy
                                </Button>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Thank you!</small>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default DonatePage;
