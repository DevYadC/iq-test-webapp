import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from '@mui/material/Alert';
import Button from 'react-bootstrap/Button';
import '../Donate.css';

import btcAddress from '../imgs/btc_address.png';
import ethAddress from '../imgs/eth_address.png';


function DonatePage() {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {

        });
    }

    return (
        <>

            <div className='DonatePage'>
                <CardGroup className='Cards'>
                    <Card>
                        <Card.Img variant="top" src={btcAddress} />
                        <Card.Body>
                            <Card.Title style={{ color: 'orange', fontWeight: 'bold' }}>Bitcoin</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                bc1qagsvrqt7s8ysjjle6rld8jn5n63m8dl3jjp787
                                <Button className='CopyButton' variant="outline-secondary" size="sm" onClick={() => copyToClipboard('bc1q6l08rtj6j907r2een0jqs6l7qnruwyxfshmf8a')}>
                                    Copy
                                </Button>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Thank you!</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ethAddress} />
                        <Card.Body>
                            <Card.Title style={{ color: '#3F88C5', fontWeight: 'bold' }}>Ethereum</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                0x28ac5E55dccafd06E05895B3168c02b03aFBeE8e
                                <Button className='CopyButton' variant="outline-secondary" size="sm" onClick={() => copyToClipboard('bc1q6l08rtj6j907r2een0jqs6l7qnruwyxfshmf8a')}>
                                    Copy
                                </Button>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Thank you!</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
}

export default DonatePage;
