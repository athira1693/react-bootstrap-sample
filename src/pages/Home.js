import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import '../scss/styles.scss'
import '../scss/home.scss'
import rightImage from '../assets/right-image.png'
import NFTCard from '../components/NFTCard'

export default function Home() {
    return (
        <Container className="pt-4">
            <Row>
                <Col lg={7} xs={12}>
                    <Row>
                    <p className='home-header'>
                        Buy and Sell with Peace of Mind
                    </p>
                    <p>
                        <small style={{ fontWeight: 'lighter' }}>
                            For creators, shoppers, crypto defi natives, one platform for all.At Africa's first NFT Marketplace.
                        </small>
                    </p>
                    <div>
                        <Button className='custom-button-primary' style={{ marginRight: '1.5rem' }}>
                            Start Now
                        </Button>
                        <Button className='custom-button-secondary'>
                            <span className='m-1'>Explore Hashgreed</span>
                            <i className="fa fa-thin fa-search"></i>
                        </Button>
                    </div>
                    <div>
                        <div className="badge">
                            A
                        </div>
                    </div>
                    </Row>
                </Col>
                <Col lg={5} xs={12}>
                    <Row className='flex-column align-items-center'>
                        <Image className='right-image img-responsive' src={rightImage} />
                        <NFTCard />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
