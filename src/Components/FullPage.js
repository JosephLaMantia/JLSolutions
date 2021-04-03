import React from "react";
import { FullPage, Slide } from "react-full-page";

export default () => {
  return (
    <FullPage>
      
        <Slide id='welcome-slide' height='100vh'>
          <section id='welcome-section'>
            <img src="https://i.imgur.com/TTpll9s.jpg" alt="Joseph's Photo"/>
            <div id='welcome-text-wrapper'>
              <h1>Hi! I'm Joseph LaMantia,</h1>
              <h2>a passionate software and web developer.</h2>
              <p>^_^</p>
            </div>
          </section>
        </Slide>
      <Slide>
        <section id='projects'>
          <h1>&lt;Check out my projects!/&gt;</h1>

          <div id='project-tile-wrapper'>
              <article class='project-tile'>
                  <a class='project-link' href="https://ttp-art-shop.netlify.app/">ART-SHOP</a>
                  <img class='project-img' src="https://i.imgur.com/BfJQ7DI.png" alt="ART-SHOP"/>
                  <div id='repo-link-wrapper'>
                      <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-client">Client</a>
                      <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-server">Server</a>
                  </div>
                  <p>An online platform where artists and art lovers can post, view, and buy art.</p>
                  <p class='collaboration'>In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic.
                  </p>
                  <ul> Highlighted tech and learning experiences:
                      <li>Stack: MongoDB, React, Node, Strapi</li>
                      <li>Material-UI: A react UI framework.</li>
                      <li>MongoDB: Database to store posts, and user info.</li>
                      <li>Strapi: A headless content management system.</li>
                      <li>Cloudinary: An upload hosting service for storing/rendering images quickly.</li>
                      <li>Netlify: Deployment of front-end.</li>
                      <li>Heroku: Deployment of back-end.</li>
                  </ul>
              </article>
          </div>
        </section>
      </Slide>

      {/* <Slide>
        <article class='project-tile'>
                    <a class='project-link' href="https://confident-euclid-5ac7e8.netlify.app/">Social Media App</a>
                    <img class='project-img' src="https://i.imgur.com/FSc4nGn.png" alt="Social Media App"/>
                    <div id='repo-link-wrapper'>
                        <a class='repo-link' href="https://github.com/JosephLaMantia/socialmedia-client">Client</a>
                        <a class='repo-link' href="https://github.com/JosephLaMantia/socialmedia-server">Server</a>
                    </div>
                    <p>Fully functioning social media web application.</p>
                    <p class='collaboration'>In collaboration with Smilte Valasinaite, and Vincenzo Mezzio.</p>
                    <ul> Highlighted tech and learning experiences:
                        <li>Stack: MERNG (MongoDB, Express, React, Node.js, GraphQL)</li>
                        <li>Semantic-UI: A react UI framework.</li>
                        <li>MongoDB: Database to store posts, and user info.</li>
                        <li>GraphQL: Query language for API's.</li>
                        <li>Apollo Client: A state management library.</li>
                        <li>Netlify: Deployment of front-end.</li>
                        <li>Heroku: Deployment of back-end.</li>
                    </ul>
                </article>
      </Slide> */}

    </FullPage>
  );
};
