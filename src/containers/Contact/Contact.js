import React, { Component } from 'react';

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB38nH9q83z6wRYICMZntL-wRiRu2r4my0",
  authDomain: "sebastian-debicki.firebaseapp.com",
  databaseURL: "https://sebastian-debicki.firebaseio.com",
  projectId: "sebastian-debicki",
  storageBucket: "sebastian-debicki.appspot.com",
  messagingSenderId: "360262243194",
  appId: "1:360262243194:web:df6e9f198e9609d3de7cc3",
  measurementId: "G-ZHH10DRE52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const messagesRef = firebase.database().ref('messages')

class Contact extends Component {
  state = {
    email: '',
    title: '',
    message: '',
    classShowAnimation: 'contact__icon-box'
  }

  saveMessage = () => {
    const newMessagesRef = messagesRef.push()
    newMessagesRef.set({
      email: this.state.email,
      title: this.state.title,
      message: this.state.message,
    })
  }

  sendingMessageHandler = (e) => {
    e.preventDefault();
    this.saveMessage();
    this.setState({ email: '', title: '', message: '', classShowAnimation: 'contact__icon-box send' })
    setTimeout(() => {
      this.setState({ classShowAnimation: 'contact__icon-box' })
    }, 5000)
  }

  handleInputChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleInputChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleInputChangeMessage = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <section className="contact">
        <div className="heading-secondary u-padding-top-huge u-margin-bottom-medium">
          <h2 className="heading-secondary__text">Contact</h2>
        </div>

        <div className="row max-width contact__container">
          <div className="col-1-of-2 contact__info u-margin-bottom-medium">
            <div className="heading-tertiary">
              <h3 className="heading-tertiary__text u-margin-bottom-small u-margin-top-medium">
                Info
            </h3>
            </div>
            <ul className="contact__list">
              <li className="contact__item">Sebastian Dębicki</li>
              <li className="contact__item">sebastian.debicki5@gmail.com</li>
            </ul>
            <a href="https://github.com/ssebaa9" className="btn btn__secondary btn__secondary-green">My Github Profile &rarr;</a>
            <a href="https://www.linkedin.com/in/sebastian-d%C4%99bicki-6604a0198/?locale=en_US" className="btn btn__secondary btn__secondary-green">My Linkedin Profile &rarr;</a>
          </div>
          <div className="col-1-of-2 contact__message u-margin-bottom-medium">
            <div className={this.state.classShowAnimation}>
              <span className="contact__icon">&#10003;</span>
            </div>
            <form className="form" onSubmit={this.sendingMessageHandler}>
              <div className="heading-tertiary">
                <h3 className="heading-tertiary__text u-margin-bottom-small u-margin-top-medium">
                  Message
            </h3>
              </div>
              <div className="form__group">
                <input value={this.state.email} onChange={this.handleInputChangeEmail} type="email" className="form__input" placeholder="Adress Email" id="email" required />
                <label className="form__label" htmlFor="email">Adress Email</label>
              </div>
              <div className="form__group">
                <input value={this.state.title} onChange={this.handleInputChangeTitle} type="text" className="form__input" placeholder="Title" id="title" />
                <label className="form__label" htmlFor="title">Title</label>
              </div>
              <div className="form__group">
                <textarea value={this.state.message} onChange={this.handleInputChangeMessage} className="form__input form__input--textarea" placeholder="Message" id="message" required />
                <label className="form__label" htmlFor="message">Message</label>
              </div>
              <button className="btn btn__primary btn__primary--dark">Send a message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;