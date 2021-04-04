import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";

class ScrollingHorizontally extends Component {
    render() {
        const child = { width: `100%`, height: `100%` };
        return (
                <HorizontalScroll width='100%'>
                    <div style={child}>
                        <section id='projects'>
                            <div id='project-tile-wrapper'>
                                <div id='project-description-wrapper'>
                                    <h1>
                                        <a class='project-link' href="https://ttp-art-shop.netlify.app/">ART-SHOP</a>
                                    </h1>
                                    <div id='description-link-wrapper'>
                                    </div>
                                    <div id='project-img-text-wrapper'>
                                        <div id='link-img-wrapper'>
                                            <div id='repo-link-wrapper'>
                                                <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-client">Client</a>
                                                <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-server">Server</a>
                                            </div>
                                            <img class='project-img' src="https://i.imgur.com/BfJQ7DI.png" alt="ART-SHOP" />
                                        </div>
                                        <div id='project-tech-wrapper'>
                                            <div id='description'>
                                                <p>An online platform where artists and art lovers can post, view, and buy art.</p>
                                                <p class='collaboration'>In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic.
                            </p>
                                            </div>
                                            <div id='tech-wrapper'>
                                                <ul> <p>Highlighted tech and learning experiences:</p>
                                                    <li>Stack: MongoDB, React, Node, Strapi</li>
                                                    <li>Material-UI: A react UI framework.</li>
                                                    <li>MongoDB: Database to store posts, and user info.</li>
                                                    <li>Strapi: A headless content management system.</li>
                                                    <li>Cloudinary: An upload hosting service for storing/rendering images quickly.</li>
                                                    <li>Netlify: Deployment of front-end.</li>
                                                    <li>Heroku: Deployment of back-end.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>

                        <div style={child}>
                        <section id='projects'>
                            <div id='project-tile-wrapper'>
                                <div id='project-description-wrapper'>
                                    <h1>
                                        <a class='project-link' href="https://ttp-art-shop.netlify.app/">ART-SHOP</a>
                                    </h1>
                                    <div id='description-link-wrapper'>
                                    </div>
                                    <div id='project-img-text-wrapper'>
                                        <div id='link-img-wrapper'>
                                            <div id='repo-link-wrapper'>
                                                <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-client">Client</a>
                                                <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-server">Server</a>
                                            </div>
                                            <img class='project-img' src="https://i.imgur.com/BfJQ7DI.png" alt="ART-SHOP" />
                                        </div>
                                        <div id='project-tech-wrapper'>
                                            <div id='description'>
                                                <p>An online platform where artists and art lovers can post, view, and buy art.</p>
                                                <p class='collaboration'>In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic.
                            </p>
                                            </div>
                                            <div id='tech-wrapper'>
                                                <ul> <p>Highlighted tech and learning experiences:</p>
                                                    <li>Stack: MongoDB, React, Node, Strapi</li>
                                                    <li>Material-UI: A react UI framework.</li>
                                                    <li>MongoDB: Database to store posts, and user info.</li>
                                                    <li>Strapi: A headless content management system.</li>
                                                    <li>Cloudinary: An upload hosting service for storing/rendering images quickly.</li>
                                                    <li>Netlify: Deployment of front-end.</li>
                                                    <li>Heroku: Deployment of back-end.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                </HorizontalScroll>
        );
    }
}

export default ScrollingHorizontally;
