import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../scss/styles.scss'
import '../scss/home.scss'

export default function Home() {
  return (
    <Container className="pt-4">
        <Row>
            <Col lg={7} xs={12}>
            <p className='home-header'>
                Buy and Sell with Peace of Mind
            </p>
            <p>
                <small style={{fontWeight:'lighter'}}>
                    For creators, shoppers, crypto defi natives, one platform for all.At Africa's first NFT Marketplace.
                </small>
            </p>
            <div>
                <Button className='custom-button-primary' style={{marginRight:'1.5rem'}}>
                    Start Now
                </Button>
                <Button className='custom-button-secondary'>
                    Explore Hashgreed 
                    <i class="fa fa-light fa-magnifying-glass pl-2"></i>
                </Button>
            </div>
            </Col>
            <Col lg={5} xs={12}>
            col 2
            </Col>
        </Row>
    </Container>
  )
}
