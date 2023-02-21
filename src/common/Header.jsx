import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

class Header extends Component {
  render() {
    return (
      <Router>
        <>
          <header>
            <div class="header-area">
              <div class="main-header  header-sticky">
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-2 col-md-1">
                      <div class="logo">
                        <a href="index.html">
                          <Link to="/">
                            {" "}
                            <img src="assets/img/logo/logo.png" alt="" />
                          </Link>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                      <div class="menu-main d-flex align-items-center justify-content-end">
                        <div class="main-menu f-right d-none d-lg-block">
                          <nav>
                            <ul id="navigation">
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/service">Service</Link>
                              </li>
                              <li>
                                <Link to="/portfolio">Portfolio</Link>
                              </li>
                              <li>
                                <a href="#">Page</a>
                                <ul class="submenu">
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <a href="blog_details.html">Blog Details</a>
                                  </li>
                                  <li>
                                    <a href="elements.html">Element</a>
                                  </li>
                                  <li>
                                    <a href="portfolio_details.html">
                                      Portfolio Details
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div class="header-right-btn f-right d-none d-xl-block ml-20">
                          <a href="#" class="btn header-btn">
                            Get Free Consultent
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    );
  }
}

export default Header;
