'use client'

import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link className='nav-link' href={'/'}>Home</Link> </Nav.Link>
            <Nav.Link href="#home"><Link className='nav-link' href={'/Blog'}>Blog</Link> </Nav.Link>
            <Nav.Link href="#link"><Link className='nav-link' href={'/facebook'}>Facebook</Link> </Nav.Link>
            <Nav.Link href="#link"><Link className='nav-link' href={'/youtube'}>Youtute</Link> </Nav.Link>
            <Nav.Link href="#link"><Link className='nav-link' href={'/google'}>Google</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header