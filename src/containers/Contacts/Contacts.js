import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Jokes from "../../containers/Jokes/Jokes";

const Contacts = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div className="container">
			<div>
				<Navbar color="faded" light>
					<NavbarBrand href="/" className="mr-auto">Projects</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} className="mr-2" />
					<Collapse isOpen={!collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink exact to="/">Project #1</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/project2">Project #2</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/project3">Project #3</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
			<div className='content'>
				<Jokes />
			</div>
		</div>
	);
};

export default Contacts;