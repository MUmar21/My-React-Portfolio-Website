import '../Componenets Css/Contact.css';
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert('Message sent!');
        } else {
            alert('Failed to send message.');
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                        className='InputsContainer'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                        className='InputsContainer'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea 
                        name="message" 
                        rows="5" 
                        placeholder="Your Message" 
                        required 
                        className='InputsContainer'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>  
    );
}

export default Contact;
