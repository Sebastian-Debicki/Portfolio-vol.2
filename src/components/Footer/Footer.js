import React from 'react';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <NavigationItem class="btn btn--logo" route="/"><span>{`<>Dębicki_`}</span><span className="logo__animate">|</span><span>{`</>`}</span></NavigationItem>
      </div>
      <div className="footer__info">
        <p className="footer__email">sebastian.debicki5@gmail.com</p>
        <a href="https://github.com/ssebaa9" className="btn btn--footer-link footer__link">
          <span className="fab fa-github footer__icon"></span>
        </a>
        <a href="https://www.linkedin.com/in/sebastian-d%C4%99bicki-6604a0198/?locale=en_US" className="btn btn--footer-link footer__link">
          <span className="fab fa-linkedin footer__icon"></span>
        </a>
        <a href="https://www.facebook.com/sebastian.debicki5?ref=bookmarks" className="btn btn--footer-link footer__link">
          <span className="fab fa-facebook footer__icon"></span>
        </a>
        <a href="https://www.instagram.com/ssebaa9/?hl=pl" className="btn btn--footer-link footer__link">
          <span className="fab fa-instagram footer__icon"></span>
        </a>
      </div>
      <div className="row">
        <div className="col-1-of-2 footer__box">
          <nav className="footer__nav">
            <ul className="footer__nav__list">
              <li className="footer__nav__item"><NavigationItem route="/" class="btn btn--footer-link" exact>Home</NavigationItem></li>
              <li className="footer__nav__item"><NavigationItem route="/projects" class="btn btn--footer-link">Projects</NavigationItem></li>
              <li className="footer__nav__item"><NavigationItem route="/about" class="btn btn--footer-link">About</NavigationItem></li>
              <li className="footer__nav__item"><NavigationItem route="/contact" class="btn btn--footer-link">Contact</NavigationItem></li>
            </ul>
          </nav>
        </div>
        <div className="col-1-of-2 footer__box">
          Copyright &copy; Sebastian Dębicki.
        </div>
      </div>
    </footer>
  );
}

export default Footer;