import React from 'react';

const Contact = ({ currentPage, handlePageChange }) => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <div class="carousel">
                <a class="carousel-item" href="tel:19137070806"><img src="./assets/img/phone-square-solid.svg"
                    alt="phone number" /></a>
                <a class="carousel-item" href="mailto:mjamesd@gmail.com?subject=Portfolio Interest"
                    target="_blank" rel="noreferrer"><img src="./assets/img/envelope-square-solid.svg" alt="mjamesd@gmail.com" /></a>
                <a class="carousel-item" href="https://github.com/mjamesd" target="_blank" rel="noreferrer"><img
                    src="./assets/img/github-square-brands.svg" alt="GitHub" /></a>
                <a class="carousel-item" href="https://www.linkedin.com/in/markjdrummond" target="_blank" rel="noreferrer"><img
                    src="./assets/img/linkedin-brands.svg" alt="LinkedIn" /></a>
                <a class="carousel-item" href="https://twitter.com/mjamesd_206" target="_blank" rel="noreferrer"><img
                    src="./assets/img/bird.svg" alt="Twitter" /></a>
                <a class="carousel-item" href="./assets/img/Mark Drummond_Resume_2022-December.pdf"
                    target="_blank"><img src="./assets/img/file-alt-solid.svg" alt="Resume" />Resum&eacute;</a>
            </div>
        </section>
    );
}

export default Contact