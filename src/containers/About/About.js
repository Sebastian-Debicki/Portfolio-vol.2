import React from 'react';
import myPicture from '../../assets/img/my-picture.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="heading-secondary u-padding-top-huge u-margin-bottom-medium">
        <h2 className="heading-secondary__text">About</h2>
      </div>
      <div className="row max-width">
        <div className="about__text-container col-1-of-2 u-margin-bottom-big">
          <div className="heading-tertiary">
            <h3 className="heading-tertiary__text u-margin-bottom-small u-margin-top-medium">
              About Me
            </h3>
          </div>
          <p>I am a beginner front-end web developer specialized mainly in React. I created several of web projects using HTML, CSS and JavaScript. I am punctual and organized employee, always striving to achieve my goal. I focus mainly on personal development and try to systematically develop in various areas of my life. Even if I encounter a problem that is beyond me, I don't give up and try to solve it.
          This is what I wan't to do in the future.
          </p>

          <div className="heading-tertiary">
            <h3 className="heading-tertiary__text u-margin-bottom-small u-margin-top-medium">
              Skills
            </h3>
          </div>
          <ul className="about__list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>SASS</li>
            <li>GIT</li>
            <li>Angular - basics</li>
            <li>Firabse - basics</li>
            <li>Jira - basics</li>
          </ul>

          <div className="heading-tertiary">
            <h3 className="heading-tertiary__text u-margin-bottom-small u-margin-top-medium">
              Next to learn
            </h3>
          </div>
          <ul className="about__list">
            <li>Angular</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="about__img-container col-1-of-2 u-margin-bottom-big">
          <img className="about__img-container__img" src={myPicture} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;