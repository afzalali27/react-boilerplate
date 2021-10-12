import React from "react";
import {
Box,
FooterLink,
Heading,
Hr,
} from "./FooterStyled";
import {Container,
	Row,
	Col,} from 'react-bootstrap'
export const Footer = ({menuCollapse}) => {

return (
	<Box menuCollapse={menuCollapse}>
	<Container>
		<Row className="display-hide">
			<Col  sm={8} className="text-left">
				<Row>
					
						<Col  sm={3}>
						    <ul className="list-unstyled">
								<li><Heading href="https://www.easifleet.com.au/novated-lease/">Novated Lease</Heading></li>
								<li><FooterLink href="https://www.easifleet.com.au/novated-lease/employers/">Employers</FooterLink></li>
								<li><FooterLink href="https://www.easifleet.com.au/novated-lease/government-not-for-profit/">Government / Not for Profit</FooterLink></li>
								<li><FooterLink href="https://www.easifleet.com.au/novated-lease/employees/">Employees</FooterLink></li><br/>
								<li><Heading href="https://www.easifleet.com.au/novated-lease-calculator/">Novated Lease Calculator</Heading></li>
							</ul>
						</Col>
					
					<Col  sm={3}>
						<ul className="list-unstyled">
							<li><Heading href="https://www.easifleet.com.au/business-car-leasing/">Business Car Leasing</Heading></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/why-lease/">Why Lease</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/finance-my-vehicles/">Finance My Vehicles</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/am-i-eligible/">Am I Eligible?</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/what-will-it-cost/">What Will It Cost?</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/government-leasing/">Government Leasing</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/not-for-profit/">Not For Profit</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/vans-trucks-and-equipment/">Vans, Trucks And Equipment</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/business-car-leasing/small-fleet-leasing/">Small Fleet Leasing</FooterLink></li><br/>
							<li><Heading href="https://www.easifleet.com.au/beat-my-quote/">Beat My Quote</Heading></li>
							<li><FooterLink href="https://www.easifleet.com.au/beat-my-quote/beat-my-finance-quote/">Beat My Finance Quote</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/beat-my-quote/beat-my-purchase-price/">Beat My Purchase Price</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/beat-my-quote/get-pre-approval/">Get Pre-Approval</FooterLink></li>
							<li><FooterLink href="#">Mumbai</FooterLink></li>
						</ul>
					</Col>
					<Col  sm={3}>
						<ul className="list-unstyled">
							<li><Heading href="https://www.easifleet.com.au/fleet-management/">Fleet Management</Heading></li>
							<li><Heading href="https://www.easifleet.com.au/salary-packaging/">Salary Packaging</Heading></li><br/>
							<li><Heading href="https://www.easifleet.com.au/car-finance/">Car Finance</Heading></li><br/>
							<li><Heading href="https://www.easifleet.com.au/resources-and-forms/">Resources</Heading></li>
							<li><FooterLink href="https://www.easifleet.com.au/resources-and-forms/brochures-guides-3-2/">Brochures & Guides</FooterLink></li>
							<li><FooterLink href="https://www.easifleet.com.au/resources-and-forms/forms/">Forms</FooterLink></li>
						</ul>
					</Col>
					<Col  sm={3}>
						<ul className="list-unstyled">
							<li><Heading href="https://www.easifleet.com.au/request-a-call-back/">Request a Call Back</Heading></li><br/>
							<li><Heading href="https://www.easifleet.com.au/specials/">Car Specials</Heading></li><br/>
							<li><Heading href="https://www.easifleet.com.au/blog/">Blog</Heading></li>
							<li><FooterLink href="https://www.easifleet.com.au/blog/videos/">Videos</FooterLink></li><br/>
							<li><Heading href="https://www.easifleet.com.au/about-us/">About Us</Heading></li><br/>
							<li><Heading href="https://reporting.easifleet.com.au/Account/Login?ReturnUrl=%2f">Login</Heading></li><br/>
						</ul>
					</Col>
					
				</Row>
			</Col>
			<Col sm={{span:3 , offset:1}} className="text-left">
				<ul className="list-unstyled">
					<li><Heading>Email</Heading></li><br/>
					<li><Heading>General:<FooterLink href="#">info@easifleet.com.au</FooterLink></Heading></li>
					<li><Heading>Novated Sales:<FooterLink href="#">novate@easifleet.com.au</FooterLink></Heading></li>
					<li><Heading>Business Sales:<FooterLink href="#">business@easifleet.com.au</FooterLink></Heading></li><br/>
					<li><Heading>Phone:<FooterLink href="#">1300 266 828</FooterLink></Heading></li>
					<li><Heading>Fax:<FooterLink href="#">1300 655 568</FooterLink></Heading></li><br/>
					<li><Heading>24 hour roadside assistance:<FooterLink href="#">1800 819 093</FooterLink></Heading></li>
					<li><Heading>24 hour accident assistance</Heading></li><br/>
					<li><Heading>Armada:<FooterLink href="#">1300 479 186</FooterLink></Heading></li>
				</ul>
			</Col>
		</Row>
		<Hr/>
		<Row>
			<Col  sm={12} md={10}	>
				<ul className="list-unstyled list-horizental">
					<li className="list-right"><Heading><FooterLink href="https://www.easifleet.com.au/sitemap/">Sitemap</FooterLink></Heading></li>
					<li className="list-right"><Heading><FooterLink href="https://www.easifleet.com.au/accessibility/">Accessibility</FooterLink></Heading></li>
					<li className="list-right"><Heading><FooterLink href="https://www.easifleet.com.au/disclaimer/">Disclaimer</FooterLink></Heading></li>
					<li className="list-right"><Heading><FooterLink href="https://www.easifleet.com.au/privacy-policy/">Privacy Policy</FooterLink></Heading></li>
					<li className="up-style list-right"><Heading><FooterLink href="http://www.juicebox.com.au">Site by JuiceBox</FooterLink></Heading></li>				
				</ul>
			</Col>
		</Row>
	</Container>
	</Box>
);
};

