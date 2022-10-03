import React, { useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import '../scss/home.scss'
import Avatars from './Avatars'
import BidCountdown from './BidCountdown'

export default function NFTCard({ profiles }) {

    const [bidVal, setBidVal] = useState(9.31)
    const [bidValUSD, setBidValUSD] = useState(298846)

    useEffect(() => {
        let val = Math.round(bidVal * 32099.462 * 100 / 100)
        let stringVal = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        setBidValUSD('($' + stringVal + ')')
    }, [bidVal])

    const handleIncrement = () => {
        let val = Math.round((bidVal + 1) * 100 / 100)
        setBidVal(val)
    }

    const handleDecrement = () => {
        let val = Math.round((bidVal - 1) * 100 / 100)
        setBidVal(val)
    }

    return (
        <Card
            text="#fff"
            className='nft-card'
            bg='transparent'
        >
            <div className='row flex-row'>
                <Col className='p-2 pe-1 col-7'>
                    <Card.Text >
                        <p className='nft-head mb-1'>NFT Sample</p>
                        <div className='d-flex ms-2 mb-2 align-items-center'>
                            <Avatars profiles={profiles} size="xs" />
                            <span className='m-1'>{profiles[0].id}</span>
                            <span><i className="fa fa-regular fa-check-circle" style={{ color: '#4bb7c8' }}></i></span>
                        </div>
                        <p className='mb-1'>
                            Reserve price
                        </p>

                        <div className='d-flex align-items-center'>
                            <span className='d-flex flex-column me-2'>
                                <i className="fa fa-solid fa-sort-up" onClick={() => handleIncrement()}></i>
                                <i className="fa fa-solid fa-sort-down" onClick={() => handleDecrement()} style={{ marginTop: '-0.3rem' }}></i>
                            </span>
                            <span className='me-2'>
                                <strong>ETH  {bidVal}</strong>
                            </span>
                            <span style={{ color: '#ffffffab' }}>
                                {bidValUSD}
                            </span>
                        </div>
                    </Card.Text>
                </Col>
                <Col className='p-2 ps-0 col-5'>
                    <Card.Text >
                        <p className='mb-1 mt-2'>
                            Auction Ends in
                        </p>
                        <BidCountdown />
                        <Button variant='text' className='bid-button' style={{ color: '#fff' }}>
                            Place Bid
                            <i className="ms-1 fa fa-thin fa-arrow-right"></i>
                        </Button>
                    </Card.Text>
                </Col>
            </div>

        </Card>

    )
}
