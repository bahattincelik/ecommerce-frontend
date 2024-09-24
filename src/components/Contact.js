import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <label>Name : </label>
                    <input type="text" placeholder="Your Name" />
                    <label>Email :</label>
                    <input type="text" placeholder="Your Email" />
                    <label>Message : </label>
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="contact-info">
                <h3>Our Information</h3>
                <p>Email : contact@ecommerce.com</p>
                <p>Phone : +123456789</p>
                <p>Email : 123 St. City</p>
            </div>

            <div className="contact-map">
                <iframe
                    title="E_Commerce Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16513.341779592596!2d8.51709239928846!3d52.030144814978414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba3d11e19b19f3%3A0x4c3fb5726cc7c7ce!2sBielefeld!5e0!3m2!1sde!2sde!4v1727170095851!5m2!1sde!2sde"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"></iframe>
            </div>

        </div>
    )
}

export default Contact