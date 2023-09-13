import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import Worker_1 from "~images/team/member-1.jpg";
import Worker_2 from "~images/team/member-2.jpg";
import Worker_3 from "~images/team/member-3.jpg";
import Worker_4 from "~images/team/member-4.jpg";

const Team = () => {
    return (
        <section id="team">
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Our Team</h3>
							<p>Aliquam at tortor sit amet eros bibendum faucibus quis nec arcu. Quisque lobortis lectus vitae lectus aliquet leo.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Member 1 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src={Worker_1} alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
										<a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
										<a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
										<a href="/" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Jeannette Crow</a></h5>
								<span className="position">CEO Founder</span>
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 2 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src={Worker_2} alt="" />
								<div className="team-social">
								<div className="team-social-inner">
										<a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
										<a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
										<a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
										<a href="/" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Michael Broad</a></h5>
								<span className="position">Web Designer</span>
							</div>
						</div>
					</Col>	
					
					{/* <!-- Member 3 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src={Worker_3} alt="" />
								<div className="team-social">
								<div className="team-social-inner">
										<a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
										<a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
										<a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
										<a href="/" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Isabella Dowson</a></h5>
								<span className="position">Creative Director</span>
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 4 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								<img src={Worker_4} alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
										<a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
										<a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
										<a href="/" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Martin Lawrence</a></h5>
								<span className="position">App Developer</span>
							</div>
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Team;