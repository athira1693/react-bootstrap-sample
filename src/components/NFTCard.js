import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import '../scss/nftcard.scss'

export default function NFTCard() {
    return (
        <Card
            bg="transparent"
            text="#fff"
            border="primary"
            className='nft-card'
            style={{ width: '18rem' }}
        >
            <Row>
                <Col>
                    <Card.Body>
                        <Card.Title>NFT Sample</Card.Title>
                        <Card.Text >
                            <p>
                                Reserve price
                            </p>
                            <div>
                                13.24$
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                <p>
                    Auction Ends in
                </p>

                </Col>
            </Row>

        </Card>

    )
}
