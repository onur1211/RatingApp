import React from 'react';
import Button from 'react-bootstrap/Button';

const ContactForm = () : any => {

  function onSubmit() {
    return () => {
    }
  }

  return (
    <div id='form'>
      <h2 className="mb-3">Contact me!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
            <input className="form-control" type="text" id="name" required/>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
            <input className="form-control" type="email" id="email" required/>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            <input hidden/>
            Message
          </label>
          <textarea className="form-control" id="message" required/>
        </div>
        <Button variant="outline-dark" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default ContactForm