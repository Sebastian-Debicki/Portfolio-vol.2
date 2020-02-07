import React from 'react';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';

const Home = () => {
  return (
    <section className="home">
      <div className="home__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main home__main-animation">Sebastian Dębicki</span>
          <span className="heading-primary--sub home__sub-animation">Front-end Developer</span>
        </h1>
        <NavigationItem route="/projects" class="btn btn__primary btn__primary--white u-margin-top-big home__btn-animation">See my projects</NavigationItem>
      </div>
    </section>
  );
}

export default Home;