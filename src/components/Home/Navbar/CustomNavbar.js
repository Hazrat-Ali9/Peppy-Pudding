import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNav = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Navbar expanded={expanded} expand="lg"  variant="light" fixed="top"style={{ backgroundColor: expanded ? 'white' : 'transparent' }}>
                <Container>
                    <Navbar.Brand className=''><img src="https://mysignal.netlify.app/assets/images/logo.png" class="img-thumbnail" alt="..."/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNav} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-1"bg="light">
                            <Nav.Link className='text-black fs-1 fw-bold'><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link className='text-black fs-1 fw-bold'><Link to=''>Our Plane</Link></Nav.Link>
                            <Nav.Link className='text-black fs-1 fw-bold'><Link to='about'>About Us</Link></Nav.Link>
                            <Nav.Link className='text-black fs-1 fw-bold'><Link to=''>Newsroom</Link></Nav.Link>
                            <Nav.Link className='text-black fs-1 fw-bold'><Link to=''>Contract Us</Link></Nav.Link>
                            <Nav.Link className='text-black fs-1 fw-bold'><Link to='dashboard'>Dashboard</Link></Nav.Link>
                        </Nav>
                        <Nav>
                        <div class="header--btn">
                            <Link to='login'><a class="button">Login</a></Link>
						
					</div>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;
