import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Projects extends Component {
    render() {
        return (

            <Carousel showStatus={false} infiniteLoop={true} useKeyboardArrows={true} width={100}>
                    <div>
                        <section id='projects'>
                            <div id='project-tile-wrapper'>
                                <div id='project-description-wrapper'>
                                    <h1><a class='project-link' href="https://ttp-art-shop.netlify.app/">ART-SHOP</a></h1>
                                    <div id='project-img-text-wrapper'>
                                        <div id='link-img-wrapper'>
                                            
                                            <img class='project-img' src="https://i.imgur.com/BfJQ7DI.png" alt="ART-SHOP" />
                                            <div id='repo-link-wrapper'>
                                                <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-client">Client</a>
                                                <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-server">Server</a>
                                            </div>
                                        </div>
                                        <div id='project-tech-wrapper'>
                                            
                                            <div id='tech-wrapper'>
                                                <p>Highlighted tech and learning experiences:</p>
                                                <ul>
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
                                    <div id='description'>
                                                <p>An online platform where artists and art lovers can post, view, and buy art.</p>
                                                <p class='collaboration'>In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic.</p>
                                            </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section id='projects'>
                            <div id='project-tile-wrapper'>
                                <div id='project-description-wrapper'>
                                    <h1><a class='project-link' href="https://confident-euclid-5ac7e8.netlify.app/">Social Media App</a></h1>
                                    <div id='project-img-text-wrapper'>
                                        <div id='link-img-wrapper'>
                                            
                                            <img class='project-img' src="https://i.imgur.com/FSc4nGn.png" alt="Social Media App"/>
                                            <div id='repo-link-wrapper'>
                                            <a class='repo-link' href="https://github.com/JosephLaMantia/socialmedia-client">Client</a>
                                            <a class='repo-link' href="https://github.com/JosephLaMantia/socialmedia-server">Server</a>
                                            </div>
                                        </div>
                                        <div id='project-tech-wrapper'>
                                            <div id='tech-wrapper'>
                                            <p>Highlighted tech and learning experiences:</p>
                                                <ul>
                                                    <li>Stack: MERNG (MongoDB, Express, React, Node.js, GraphQL)</li>
                                                    <li>Semantic-UI: A react UI framework.</li>
                                                    <li>MongoDB: Database to store posts, and user info.</li>
                                                    <li>GraphQL: Query language for API's.</li>
                                                    <li>Apollo Client: A state management library.</li>
                                                    <li>Netlify: Deployment of front-end.</li>
                                                    <li>Heroku: Deployment of back-end.</li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    <div id='description'>
                                                <p>Fully functioning social media web application.</p>
                                                <p class='collaboration'>In collaboration with Smilte Valasinaite, and Vincenzo Mezzio.</p>
                                            </div>
                                </div>
                                
                            </div>
                        </section>
                    </div>
            </Carousel>
        );
    }
}

export default Projects;
