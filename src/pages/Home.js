import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import rightImage from '../assets/right-image.png'
import NFTCard from '../components/NFTCard'
import Avatars from '../components/Avatars'
import '../scss/home.scss'
import NFTOption from '../components/NFTOption'

export default function Home() {
    const profiles = [{
        name: "John William",
        id: "@queendore",
        image: "https://picsum.photos/70"
    },
    {
        name: "Rob Winter",
        id: "rWinter",
        image: "https://picsum.photos/80"
    },
    {
        name: "Haily Green",
        id: "hGreen",
        image: "https://picsum.photos/90"
    },
    {
        name: "Billy Kendall",
        id: "bKendall",
        image: "https://picsum.photos/100"
    },
    ]

    const nftOptions = [{
        action: 'Sign Up',
        path: '/signup',
        Icon: <i className="fa fa-2x fa-solid fa-user"></i>,
        description: 'Click on the "Watch Video" button below to see how to sign up on Hashgreed'
    },
    {
        action: 'Sign Up',
        path: '/signup',
        Icon: <i className="fa fa-2x fa-solid fa-user"></i>,
        description: 'Click on the "Watch Video" button below to see how to sign up on Hashgreed'
    },
    {
        action: 'Bid',
        path: '/bid',
        Icon: <i className="fa fa-2x fa-solid fa-usd"></i>,
        description: 'Now that you have you Hash and Cer credits, go ahead and watch how to shop on Hashgreed'
    }]
    return (
        <Container className="pt-4">
            <div className='row '>
                <Col md={7} xs={12} className="row justify-content-center column-1">
                    <p className='home-header'>
                        Buy and Sell with Peace of Mind
                    </p>
                    <p>
                        <small style={{ fontWeight: 'lighter' }}>
                            For creators, shoppers, crypto defi natives, one platform for all.At Africa's first NFT Marketplace.
                        </small>
                    </p>
                    <div>
                        <Button style={{ minWidth: '35%' }} className='custom-button-primary mb-2 me-2'>
                            Start Now
                        </Button>
                        <Button className='custom-button-secondary mb-2'>
                            <span className='m-1'>Explore Hashgreed</span>
                            <i className="fa fa-thin fa-search"></i>
                        </Button>
                    </div>
                    <div className='d-flex align-items-center ps-3 avatar-container' >
                        <Avatars profiles={profiles} size="sm" />
                        <span className='ms-3'><i className="fa fa-solid fa-circle"></i>
                            <p className='d-inline ms-2' style={{ fontSize: '0.75rem' }}>250k+ people use Hashgreed</p>
                        </span>
                    </div>
                </Col>
                <Col md={5} xs={12} className="column-2 row flex-column align-items-center">
                    <Image className='right-image img-responsive' src={rightImage} />
                    <NFTCard profiles={[profiles[0]]} />
                </Col>
            </div>
            <div className='row mt-5'>
                <div className="blockquote text-center" style={{ fontWeight: 100 }}>Follow These Steps To Use Our Appliction
                </div>
                <Row className='justify-contents-space-between nft-options align-items-center'>
                    {
                        nftOptions.map((op, index) => {
                            return <><Col key={`opt-${index}`} className='option-item row align-items-center'>
                                <NFTOption action={op.action} path={op.path} Icon={op.Icon} description={op.description} />
                            </Col>
                                <Col className="arrow text-center" key={`arrow-${index}`} style={{ display: index === nftOptions.length - 1 ? 'none' : 'unset' }}>
                                    <i className="fa fa-lg fa-solid fa-long-arrow-right"></i>
                                </Col>
                            </>
                        })
                    }
                </Row>
                <div className='text-center mt-3 pb-3'>
                    <Button style={{ minWidth: '12rem' }} className='custom-button-primary'>
                        Watch Video
                    </Button>
                </div>
            </div>
        </Container>
    )
}
