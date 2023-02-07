import React from 'react';

export default function Portfolio({ currentPage, handlePageChange }) {
    return (
        <section id="projects" class="row">
            <header class="col s12">
                <h2>Projects</h2>
            </header>
            <div class="col s12">
                {/* <!-- FIRST ROW --> */}
                <div class="row" data-label="project-row-1">
                    <section class="col s12 m7" data-label="total-quest">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/total-quest.png" alt="Total Quest" />
                                <span class="card-title"><span class="new badge pulse"></span> Total Quest</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="https://www.totalquest.us/" target="_blank" rel="noreferrer"><i
                                        class="material-icons">preview</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab"
                                    href="https://github.com/mjamesd/urban-giggle" target="_blank" rel="noreferrer"><i
                                        class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    A web app in which users complete scavenger hunts by solving clues. A QR code is
                                    placed at each location, so when the user finds it they scan the code. It directs
                                    them to the app to celebrate their victory with confetti and rewards! Users can also
                                    become organizers to create their own scavenger hunts and locations from the web
                                    app.<br />
                                    <br />
                                    Developed with the MERN (MongoDB, Express, React, & Node) stack using the Material
                                    UI library and GraphQL. We used JWT for authentication and deployed the project to a
                                    branded domain with TLS.
                                </p>
                            </article>
                            <aside class="card-action">
                                Developed in a team setting as coursework.
                            </aside>
                        </div>
                    </section>
                    <section class="col s12 m5" data-label="pressed-words">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/pressed-words.png" alt="Pressed Words" />
                                <span class="card-title">Pressed Words</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="http://blog.markdrummond.me/" target="_blank" rel="noreferrer"><i
                                        class="material-icons">preview</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab"
                                    href="https://github.com/mjamesd/jubilant-robot" target="_blank" rel="noreferrer"><i
                                        class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    A blog app with an MVC content management system using Express as the back end,
                                    Handlebars as the front end, and MySQL as the database. It utilizes asynchronous
                                    JavaScript functions and performs CRUD functions (Create, Read, Update, and Delete)
                                    on users, posts, and comments. The app uses the MySQL2, Express, Express-Handlebars,
                                    Express-Session, dotenv, and Sequelize Node.js packages.
                                </p>
                            </article>
                            <aside class="card-action">
                                Developed individually as coursework.
                            </aside>
                        </div>
                    </section>
                </div>
                {/* <!-- SECOND ROW --> */}
                <div class="row" data-label="project-row-2">
                    <section class="col s12 m4 l4" data-label="tunespace">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/TuneSpace.png" alt="TuneSpace" />
                                <span class="card-title">TuneSpace</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="https://mjamesd.github.io/crispy-happiness/" target="_blank" rel="noreferrer"><i
                                        class="material-icons">preview</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab"
                                    href="https://github.com/mjamesd/crispy-happiness" target="_blank" rel="noreferrer"><i
                                        class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    A mobile-responsive, API-driven, jQuery and Materialize website that provides
                                    biographies, discographies, and lyrics for musicians of all genres. By pulling data
                                    from various databases we created a centralized hub where users can explore their
                                    favorite artists and discover new music.
                                </p>
                            </article>
                            <aside class="card-action">
                                Developed in a team setting as coursework.
                            </aside>
                        </div>
                    </section>
                    <section class="col s12 m8 l8" data-label="uw-vrc">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/vrc.png" />
                                <span class="card-title flow-text">UW Virology Research Clinic</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="http://depts.washington.edu/vrc" target="_blank" rel="noreferrer"><i
                                        class="material-icons">preview</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab disabled"
                                    target="_blank" rel="noreferrer"><i class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    A full stack content management system and public-facing website for an infectious
                                    disease research clinic in Seattle, Wa, using the LAMP stack and custom PHP, the
                                    CakePHP MVC framework, CSS, JavaScript, and MySQL.
                                </p>
                            </article>
                            <aside class="card-action">
                                Proprietary code unavailable.
                            </aside>
                        </div>
                    </section>
                </div>
                {/* <!-- THIRD ROW --> */}
                <div class="row" data-label="project-row-3">
                    <section class="col s12 m4 l4" data-label="seattle-vteu">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/vteu.png" />
                                <span class="card-title flow-text">Seattle VTEU</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="http://uwvteu.org/" target="_blank" rel="noreferrer"><i class="material-icons">preview</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab disabled"
                                    target="_blank" rel="noreferrer"><i class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    A Wordpress website for a COVID-19 vaccine clinical trial center in Seattle,
                                    Wa.
                                </p>
                            </article>
                            <aside class="card-action">
                                Proprietary code unavailable.
                            </aside>
                        </div>
                    </section>
                    <section class="col s12 m4 l4" data-label="go-team-go">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/go-team-go.png" />
                                <span class="card-title flow-text">Go, Team, Go!</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="https://watch.screencastify.com/v/GCro8fYiQrT7bSnuYFLt" target="_blank" rel="noreferrer"><i
                                        class="material-icons">ondemand_video</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab"
                                    href="https://github.com/mjamesd/go-team-go" target="_blank" rel="noreferrer"><i
                                        class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    A Node.js command-line application that takes in information about employees
                                    on a software engineering team, then generates an HTML webpage that displays
                                    summaries for each person.
                                </p>
                                <p>
                                    Demostration of command line interaction, Materialize CSS, and testing using the
                                    Jest Node.JS package.
                                </p>
                            </article>
                            <aside class="card-action">
                                Developed individually as coursework.
                            </aside>
                        </div>
                    </section>
                    <section class="col s12 m4 l4" data-label="weather-dashboard">
                        <div class="card hoverable">
                            <header class="card-image">
                                <img src="./assets/img/weather-dashboard.png" />
                                <span class="card-title flow-text">Weather Dashboard</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab preview-fab-btn"
                                    href="https://mjamesd.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><i
                                        class="material-icons">preview</i></a>
                                <a class="btn-floating halfway-fab waves-effect waves-light my-fab"
                                    href="https://github.com/mjamesd/weather-dashboard" target="_blank" rel="noreferrer"><i
                                        class="material-icons">integration_instructions</i></a>
                            </header>
                            <article class="card-content">
                                <p>
                                    An API-driven jQuery and Bootstrap webapp to check the weather. The user's searches
                                    are saved and can be recalled at the click of a button.
                                </p>
                            </article>
                            <aside class="card-action">
                                Developed individually as coursework.
                            </aside>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
