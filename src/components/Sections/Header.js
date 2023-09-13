import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

// Images
import Logo from "~images/logo.png";
import Logo2X from "~images/logo@2x.png";
import LogoWhite from "~images/logo-white.png";
import LogoWhite2X from "~images/logo-white@2x.png";

const Header = (props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const handleMobileMenu = e => {
        e.preventDefault();
        return setIsMobileMenu(!isMobileMenu);
    };

    const handleSearch = e => {
        e.preventDefault();
        return setIsSearch(!isSearch);
    };

    // Scroll spy
    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {    
            if (window.location.href.split('#').length > 1) {
                const sections = document.querySelectorAll('section[id]');
                
                window.addEventListener('scroll', function() {
                    const pos = window.scrollY;            
                    
                    if (pos > 0) {
                        sections.forEach(el => {
                            if (el.offsetTop - 150 <= pos && el.offsetTop + el.clientHeight >= pos) {
                                const getId = el.getAttribute('id');

                                document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                                    const activeLink = document.querySelector(`.nav-item a[href^="/#${getId}"]`);
                                    
                                    if (activeLink) {
                                        link.classList.remove('active');
                                        activeLink.classList.add('active');
                                    }
                                });
                            }
                        });
                    } else {
                        const link = document.querySelector(`.nav-item`);
                        link.classList.remove('active');

                        const activeLink = document.querySelector(`.nav-item a[href^="/#top-page"]`);
                        activeLink.classList.add('active');
                    }
                });
            } else {
                window.addEventListener('scroll', function() {
                    document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                        link.classList.remove('active');
                    });
                });
            }
        }

        return () => (unmounted = true);
    });

    return (
        <>
            <header id="top-page" className="header">
                <div id="mainNav" className={isMobileMenu ? 'main-menu-area animated mobile-menu-open' : 'main-menu-area animated'}>
                    <Container>
                        <Row className="align-items-center">
                            
                            <Col className="col-12 col-lg-2 d-flex justify-content-between align-items-center">

                                {/* <!-- Logo --> */}
                                <div className="logo">
                                    
                                    <Link to="/" className="navbar-brand navbar-brand1">
                                        <img src={LogoWhite} srcSet={`${LogoWhite2X} 2x`} alt="Naxos" />
                                    </Link>

                                    <Link to="/" className="navbar-brand navbar-brand2">
                                        <img src={Logo} srcSet={`${Logo2X} 2x`} alt="Naxos" />
                                    </Link>
                                
                                </div>

                                {/* <!-- Burger menu --> */}
                                <div className="menu-bar d-lg-none" role="button" tabIndex={0} onKeyPress={() => {}} onClick={handleMobileMenu}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </Col>

                            <div className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end" role="button" tabIndex={0} onKeyPress={() => {}} onClick={handleMobileMenu}>
                            
                                {/* <!-- Mobile menu --> */}
                                <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">
                                    
                                    {/* <!-- Logo --> */}
                                    <a href="/" className="logo">
                                        <img src={Logo} srcSet={`${Logo2X} 2x`} alt="Naxos" />
                                    </a>
                                    
                                    {/* <!-- Close button --> */}
                                    <span className="close-button" role="button" aria-label="Close" tabIndex={0} onKeyPress={() => {}} onClick={handleMobileMenu}></span>
                                    
                                </div>
                                
                                {/* <!-- Items --> */}
                                <ul className="nav-menu d-lg-flex flex-wrap list-unstyled justify-content-center">
                                    
                                    <li className="nav-item">
                                        <Link to="/#top-page" className={props.nav !== undefined && props.nav==="home" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/#features" className="nav-link js-scroll-trigger">
                                            <span>Features</span>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/#screenshots" className="nav-link js-scroll-trigger">
                                            <span>Screenshots</span>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/#support" className="nav-link js-scroll-trigger">
                                            <span>Support</span>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/#pricing" className="nav-link js-scroll-trigger">
                                            <span>Pricing</span>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/blog" className={props.nav !== undefined && props.nav==="blog" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                            <span>Blog</span>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/contact" className={props.nav !== undefined && props.nav==="contact" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                            <span>Contact</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item search-option">
                                        <a className="nav-link" href="/" onClick={handleSearch}>
                                            <i className="fas fa-search"></i>
                                        </a>
                                    </li>

                                </ul>
                                
                            </div>

                        </Row>
                    </Container>
                </div>
            </header>

            {/* <!-- Search wrapper --> */}
            <div className={!isSearch ? 'search-wrapper' : 'search-wrapper wrapper-active'}>

                {/* <!-- Search form --> */}
                <form role="search" method="get" className="search-form" action="#">				
                    <input type="search" name="s" id="s"
                        placeholder="Search Keyword"
                        className="searchbox-input" autoComplete="off" required />
                    
                    <span>Input your search keywords and press Enter.</span>			
                </form>

                {/* <!-- Close button --> */}
                <div className="search-wrapper-close">
                    <span className="search-close-btn" role="button" aria-label="Close" tabIndex={0} onKeyPress={() => {}} onClick={handleSearch}></span>
                </div>

            </div>
        </>
    );
}

export default Header;