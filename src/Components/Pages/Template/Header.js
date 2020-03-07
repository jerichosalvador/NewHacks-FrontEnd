import React from 'react'

const Header = () => {
    return (
        <div>
            <header id="header">
                <div className="inner">
                    <a href="index.html" className="logo"><strong>Projection</strong> by TEMPLATED</a>
                    <nav id="nav">
                        <a href="index.html">Home</a>
                        <a href="generic.html">Generic</a>
                        <a href="elements.html">Elements</a>
                    </nav>
                    <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
                </div>
            </header>

            <section id="banner">
                <div className="inner">
                    <header>
                        <h1></h1>
                    </header>

                    <div className="flex ">

                        <div>
                            <span className="icon fa-car"></span>
                            <h3>Aliquam</h3>
                            <p>Suspendisse amet ullamco</p>
                        </div>

                        <div>
                            <span className="icon fa-camera"></span>
                            <h3>Elementum</h3>
                            <p>className aptent taciti ad litora</p>
                        </div>

                        <div>
                            <span className="icon fa-bug"></span>
                            <h3>Ultrices</h3>
                            <p>Nulla vitae mauris non felis</p>
                        </div>

                    </div>

                    <footer>
                        <a href="#" className="button">Get Started</a>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Header