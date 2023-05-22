import React from "react";

function Header(Title) {
    return (
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3">
                        <img alt="Logo" src="Lifespan-Trust-site-logo-updated-250x99.png" />
                    </div>
                    <div class="col-md-6">
                        <h3 class="text-center">{Title}</h3>
                    </div>
                    <div class="col-md-3" />
                </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="home">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="signup">Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="signin">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
      </div>
    );
}

export default Header;