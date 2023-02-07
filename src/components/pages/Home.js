import React from 'react';

export default function Home({ currentPage, handlePageChange }) {
    return (
        <section className="home">
            <div className="card-panel site-purple hoverable">
                <h4 className="white-text">Full Stack Web Developer</h4>
                <span className="white-text">HTML5, accessible web, CSS3, Bootstrap, Materialize JS & CSS,
                    JavaScript, jQuery, Node.js, Express, React, React Material UI library, Mongoose,
                    GraphQL, PHP, MySQL, MongoDB, WordPress, Git, & Heroku</span>
            </div>
            <div className="card-content">
                <div className="card-image">
                    <img className="profile-pic" src="./assets/markdrummond_250.jpg" alt="Mark J Drummond" />
                </div>
                <p>
                    I'm a thirty-something new dad from Kansas City, now living in Seattle and
                    following my passion as a full stack web developer. I have independent,
                    freelance, and team development experience creating full
                    stack web apps, mobile-responsive websites, and content management
                    systems for clients big and small. I want to work with your farmer's
                    market stand, small business, university department, or development firm to
                    create a meaningful product that meets your customers' needs, as well as your
                    own. Contact me today to discuss your next website!
                </p>
            </div>
        </section>
    );
}
