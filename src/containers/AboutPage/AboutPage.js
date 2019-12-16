import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";

const AboutPage = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div className="container">
			<div>
				<Navbar color="faded" light>
					<NavbarBrand href="/" className="mr-auto">Main Page</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} className="mr-2" />
					<Collapse isOpen={!collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink exact to="/">Main Page</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/about">About Us</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/contacts">Our contacts</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
			<div className='content'>
				About Us
			</div>
		</div>
	);
};

export default AboutPage;