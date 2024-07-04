import React from 'react';

function Contact() {
    return (
        <div className="contact" id="contact">
            <h2>Contact Us</h2>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="tel" name="phoneNumber" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>Our Location: 2400 Mission St. #900, Amonk, NY 10504</p>
                <p>Email: info@exatek.com</p>
                <p>Phone: +302-545-3339</p>
            </div>
        </div>
    );
}

export default Contact;