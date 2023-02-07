import React from 'react';

export default function About({ currentPage, handlePageChange }) {
    return (
        <section className="about" data-label="about">
            <h1>Web Developer for Hire</h1>
            <p>I'm a full stack web developer with independent, freelance, and team development experience. I've created single-page apps, mobile-responsive web apps, WordPress sites, Drupal sites, full-stack React apps with the MERN stack with GraphQL, and full-stack PHP MVC CMSs for clients big and small.</p>

            <p>I researched and procured components to build a server from scratch when I was 14. I taught myself Debian Linux system administration on the command line, then began teaching myself to code. I then taught myself Apache configuration and ran a web and email server out of my bedroom in my parents' house. I learned HTML, CSS, a little JavaScript, and a lot of PHP from tutorials before YouTube was created. I tested myself by building a website that was basically Facebook before Facebook was created. My friends and I would post updates and comment on each other's posts. It supported infinitely-nested comments, image uploads, and user profiles.</p>

            <p>During university, I took on a few small clients, contracted with a development firm, and worked at two small businesses as a web developer. I graduated and fell out of the development field to pursue other passions. Now I've earned a certificate in full stack web development through the University of Washington and am very excited to pursue this career again.</p>

            <p>I am seeking employment as a web developer – front end, back end, or full stack. Contact me today to discuss your next website!</p>

            <p>I have been passionate about web development since I was a teenager. I began teaching myself to code when I was 15 and was proficient in C, Bash, HTML, CSS, PHP & MySQL by the time I graduated high school. In college, I took on a few small clients and worked as a web developer at two small businesses. When I moved to Seattle, I established a career in and passion for public health but always missed the creativity and problem solving of web development. As soon as I had the resources, I pursued a certificate in full stack web development through the University of Washington. Now that I’ve earned the certificate, I am excited to pursue this career again. I am seeking employment as a front end, back end, or full stack web developer and look forward to working with you. Please view my <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >portfolio</a> (last updated December 2022) for examples of my past and current projects. I look forward to working with you!
            </p>
        </section>
    );
}
