import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar expand="lg" bg='light' className='shadow-lg border-top sticky-bottom'>
      <Container>
        <Nav className="mr-auto flex-row gap-4 mx-auto">
          <Nav.Link href="#home" className='text-center active'>
            <div className="icon-nav">
              <i className="fas fa-home"></i>
            </div>
            Home
          </Nav.Link>
          <Nav.Link href="#home" className='text-center'>
            <div className="icon-nav">
              <i className="far fa-calendar-check"></i> 
            </div>
            Attendance
          </Nav.Link>
          <Nav.Link href="#home" className='text-center'>
            <div className="checkout-button shadow-lg border">
              <div className="icon-checkout">
                <i className="fas fa-sign-out-alt"></i> 
              </div>
            </div>
            <div className="text-danger mt-2">
              Check Out
            </div>
          </Nav.Link>
          <Nav.Link href="#home" className='text-center'>
            <div className="icon-nav">
              <i className="far fa-file-alt"></i>
            </div>
            Form
          </Nav.Link>
          <Nav.Link href="#home" className='text-center'>
            <div className="icon-nav">
              <i className="fas fa-cog"></i>
            </div>
            Setting
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComp