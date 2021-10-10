import React from 'react'
// TODO: Fix hamburger menu
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <div className="row m-auto">
            <div className="col-12 w-100 text-center">
              <a className="navbar-brand w-100" href="/home">
                Arrive Mindful
              </a>
            </div>
            <div className="col-12 w-100 text-center">
              <div className="navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto" style={{float: 'none'}}>
                <li className="nav-item active">
                  <a href="/home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/classes" className="nav-link">
                    Programs &amp; Classes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/schedule" className="nav-link">
                    Schedule
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Education</a>
                  <ul className="dropdown-menu m-auto" role="menu" aria-labelledby="dLabel">
                    <li className="nav-item">
                      <a href="/blog" className="dropdown-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/education/yoga-philosophy" className="dropdown-link">
                        Yoga Philosophy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/education/mental-health" className="dropdown-link">
                        Mindfulness &amp; Mental Health
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/education/yoga-un" className="dropdown-link">
                        Yoga at the United Nations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/education/resources" className="dropdown-link">
                        Readings &amp; Resources
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Media</a>
                  <ul className="dropdown-menu m-auto" role="menu" aria-labelledby="dLabel">
                    <li className="nav-item">
                      <a href="/audio" className="dropdown-link">
                        Audio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/video" className="dropdown-link">
                        Video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/gallery" className="dropdown-link">
                        Photo Gallery
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
