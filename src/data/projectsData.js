import React from 'react';

import recepiesImg1 from '../assets/projects-imgs/recepies/recepies-img-1.jpg';
import recepiesImg2 from '../assets/projects-imgs/recepies/recepies-img-2.jpg';
import savingsImg1 from '../assets/projects-imgs/savings-form/savings-img-1.jpg';
import savingsImg2 from '../assets/projects-imgs/savings-form/savings-img-2.jpg';
import savingsImg3 from '../assets/projects-imgs/savings-form/savings-img-3.jpg';
import notesImg1 from '../assets/projects-imgs/notes/notes-img-1.jpg';
import weatherImg1 from '../assets/projects-imgs/weather-app/weather-img-1.jpg';
import weatherImg2 from '../assets/projects-imgs/weather-app/weather-img-2.jpg';
import weatherImg3 from '../assets/projects-imgs/weather-app/weather-img-3.jpg';
import weatherImg4 from '../assets/projects-imgs/weather-app/weather-img-4.jpg';
import todoappImg1 from '../assets/projects-imgs/to-do-app/todoapp-img-1.jpg';
import todoappImg2 from '../assets/projects-imgs/to-do-app/todoapp-img-2.jpg';
import miniblogImg1 from '../assets/projects-imgs/mini-blog/miniblog-img-1.jpg';
import miniblogImg2 from '../assets/projects-imgs/mini-blog/miniblog-img-2.jpg';
import miniblogImg3 from '../assets/projects-imgs/mini-blog/miniblog-img-3.jpg';
import miniblogImg4 from '../assets/projects-imgs/mini-blog/miniblog-img-4.jpg';
import miniblogImg5 from '../assets/projects-imgs/mini-blog/miniblog-img-5.jpg';
import hangmanImg1 from '../assets/projects-imgs/hangman-game/hangman-img-1.jpg';
import hangmanImg2 from '../assets/projects-imgs/hangman-game/hangman-img-2.jpg';
import hangmanImg3 from '../assets/projects-imgs/hangman-game/hangman-img-3.jpg';
import hangmanImg4 from '../assets/projects-imgs/hangman-game/hangman-img-4.jpg';
import hangmanImg5 from '../assets/projects-imgs/hangman-game/hangman-img-5.jpg';
import hangmanImg6 from '../assets/projects-imgs/hangman-game/hangman-img-6.jpg';
import mywebsiteImg1 from '../assets/projects-imgs/my-website/mywebsite-img-1.jpg';
import mywebsiteImg2 from '../assets/projects-imgs/my-website/mywebsite-img-2.jpg';
import mywebsiteImg3 from '../assets/projects-imgs/my-website/mywebsite-img-3.jpg';
import mywebsiteImg4 from '../assets/projects-imgs/my-website/mywebsite-img-4.jpg';
import mywebsiteImg5 from '../assets/projects-imgs/my-website/mywebsite-img-5.jpg';
import mywebsiteImg6 from '../assets/projects-imgs/my-website/mywebsite-img-6.jpg';
import tableImg1 from '../assets/projects-imgs/table-companies/table-img-1.jpg';
import tableImg2 from '../assets/projects-imgs/table-companies/table-img-2.jpg';
import tableImg3 from '../assets/projects-imgs/table-companies/table-img-3.jpg';
import portfolioWebImg1 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-1.jpg';
import portfolioWebImg2 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-2.jpg';
import portfolioWebImg3 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-3.jpg';
import portfolioWebImg4 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-4.jpg';
import portfolioWebImg5 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-5.jpg';
import portfolioWebImg6 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-6.jpg';
import portfolioWebImg7 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-7.jpg';
import portfolioWebImg8 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-8.jpg';
import portfolioWebImg9 from '../assets/projects-imgs/portfolio-web/portfolio-web-img-9.jpg';


const html = <span key="1" title="HTML" className="iconify projects__project-icon" data-icon="logos:html-5" data-inline="false"></span>
const css = <span key="2" title="CSS" className="iconify projects__project-icon" data-icon="logos:css-3" data-inline="false"></span>
const javaScript = <span key="3" title="JavaScript" className="iconify projects__project-icon" data-icon="logos:javascript" data-inline="false"></span>
const react = <span key="4" title="React" className="iconify projects__project-icon" data-icon="logos:react" data-inline="false"></span>;
const sass = <span key="5" title="SASS" className="iconify projects__project-icon" data-icon="logos:sass" data-inline="false"></span>
const redux = <span key="6" title="Redux" className="iconify projects__project-icon" data-icon="logos-redux" data-inline="false"></span>
const firebase = <span key="7" title="Firebase" className="iconify projects__project-icon" data-icon="logos:firebase" data-inline="false"></span>


export const projects = [
  {
    title: 'Recepies',
    describe: 'You can add recepies and later modify them.',
    technologies: [html, css, javaScript],
    images: [recepiesImg1, recepiesImg2],
    githubLink: 'https://github.com/ssebaa9/recepies',
  },
  {
    title: 'Savings/Expenses Formular',
    describe: 'Small app where you can add your savings and expenses for every month.',
    technologies: [html, css, javaScript],
    images: [savingsImg1, savingsImg2, savingsImg3],
    githubLink: 'https://github.com/ssebaa9/savings-expenses-formular'
  },
  {
    title: 'Notes Making App',
    describe: 'You can store your notes here and edit them later.',
    technologies: [html, css, javaScript, react, sass],
    images: [notesImg1],
    githubLink: 'https://github.com/ssebaa9/note-making-app'
  },
  {
    title: 'Weather App',
    describe: 'You can check the weather in your city.',
    technologies: [html, css, javaScript, react, sass],
    images: [weatherImg1, weatherImg2, weatherImg3, weatherImg4],
    githubLink: 'https://github.com/ssebaa9/Weather-app'
  },
  {
    title: 'To Do App',
    describe: 'Simple to-do-application, you can store here every your ideas.',
    technologies: [html, css, javaScript, react, sass],
    images: [todoappImg1, todoappImg2],
    githubLink: 'https://github.com/ssebaa9/To-do-app'
  },
  {
    title: 'Mini Blog',
    describe: 'You can store here your articles and later modify them. Login: admin, Password: admin',
    technologies: [html, css, javaScript, react, sass],
    images: [miniblogImg1, miniblogImg2, miniblogImg3, miniblogImg4, miniblogImg5],
    githubLink: 'https://github.com/ssebaa9/Mini-blog'
  },
  {
    title: 'Hangman Game',
    describe: 'Try to guess the word.',
    technologies: [html, css, javaScript, react, sass, redux, firebase],
    images: [hangmanImg1, hangmanImg2, hangmanImg3, hangmanImg4, hangmanImg5, hangmanImg6],
    githubLink: 'https://github.com/ssebaa9/Hangman-game'
  },
  {
    title: 'My Website',
    describe: 'Website about me, all created by me',
    technologies: [html, css, javaScript, react, sass, firebase],
    images: [mywebsiteImg1, mywebsiteImg2, mywebsiteImg3, mywebsiteImg4, mywebsiteImg5, mywebsiteImg6],
    githubLink: 'https://github.com/ssebaa9/My-website.git'
  },
  {
    title: 'Table of Companies',
    describe: 'You can sort the table by header or filter any matching elements by search field. Table looks good on the mobile devices too.',
    technologies: [html, css, javaScript, react, sass],
    images: [tableImg1, tableImg2, tableImg3],
    githubLink: 'https://github.com/ssebaa9/Table-of-Companies'
  },
  {
    title: 'Portfolio Web',
    describe: 'Website about me. I created this web mainly for increasing my css and sass skils. This website looks good on mobile devices too',
    technologies: [html, css, javaScript, react, sass, firebase],
    images: [portfolioWebImg1, portfolioWebImg2, portfolioWebImg3, portfolioWebImg4, portfolioWebImg5, portfolioWebImg6, portfolioWebImg7, portfolioWebImg8, portfolioWebImg9],
    githubLink: 'https://github.com/ssebaa9/Table-of-Companies'
  }

]