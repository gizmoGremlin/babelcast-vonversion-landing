import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import LogoWhite from "~images/logo-white.png";
import LogoWhite2X from "~images/logo-white@2x.png";

export default class Footer extends Component {

	componentDidMount() {
		// To top
		const toTop = document.querySelector('.to-top');

		// Scroll
		window.addEventListener('scroll', function() {
			const mainMenu = document.querySelector('.main-menu-area');
			const pos = window.scrollY;
	
			if (mainMenu) {
				if (pos >= 100) {
					mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
				} else {
					mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
				}
			}
	
			// Scroll to top button
			if (pos >= 500) {
				toTop.classList.add('fixed-totop');
			} else {
				toTop.classList.remove('fixed-totop');
			}
		});
	}

	render() {
		return (
			<footer>
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row>
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src={LogoWhite} srcSet={`${LogoWhite2X} 2x`} alt="Naxos" />
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
									</p>
									
									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="/" aria-label="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
										<a href="/" aria-label="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
										<a href="/" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
										<a href="/" aria-label="Pinterest"><i className="fab fa-pinterest fa-fw"></i></a>
									</div>
								</div>
							</Col>
							
							{/* <!-- Useful links --> */}
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">
									
									<h6>Useful Links</h6>
									
									<ul className="footer-menu">
										<li><a href="/">Support</a></li>
										<li><a href="/">Privacy Policy</a></li>
										<li><a href="/">Terms &amp; Conditions</a></li>
										<li><a href="/">Affiliate Program</a></li>
										<li><a href="/">Careers</a></li>
									</ul>
									
								</div>
							</Col>
							
							{/* <!-- Product help --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									
									<h6>Product Help</h6>
									
									<ul className="footer-menu">
										<li><a href="/">FAQ</a></li>
										<li><a href="/">Reviews</a></li>
										<li><a href="/">Features</a></li>
										<li><a href="/">Feedback</a></li>
										<li><a href="/">API</a></li>
									</ul>
									
								</div>
							</Col>
							
							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
									<h6>Download</h6>
									
									<div className="button-store">
										<a href="/" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p></a>
										<a href="/" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Download on<span>App Store</span></p></a>
									</div>
									
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © 2022 <a href="/" target="_blank">Naxos</a>. All Rights Reserved.
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>

			</footer>
		);
	}
	
}