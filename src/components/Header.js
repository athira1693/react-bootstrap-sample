import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../scss/header.scss'

export default function Header() {
  return (
    <Navbar expand="md" className='pt-4'>
      <Container>
        <Navbar.Brand href="/" className='brand-name'>HASHGREED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="/#home" className="me-auto">
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#faqs">FAQs</Nav.Link>
            <Nav.Link href="/#usecases">Use Cases</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='text' className='account-button' style={{ color: '#fff' }}>
              Account
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
