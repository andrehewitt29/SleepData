import React from "react";

function Header(Title) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <img alt="Logo" src="Lifespan-Trust-site-logo-updated-250x99.png" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center">{Title}</h3>
                    </div>
                    <div className="col-md-3" />
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="home">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="signup">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="signin">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
      </div>
    );
}

export default Header;