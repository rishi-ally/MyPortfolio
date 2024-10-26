import React, { useRef } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar2 from './Navbar2';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xwpkpdvo', {
                method: 'POST',
                body: new FormData(form.current),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.current.reset(); // Reset the form fields
            } else {
                alert('There was an error sending your message.');
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('There was an error sending your message.');
        }
    };

    return (
        <>
           
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="shadow p-4 bg-white rounded" style={{ width: '90%', maxWidth: '400px', marginTop: "5vh" }}>
                    <div className="text-center mb-4">
                        <h2>Contact Me</h2>
                        <p>If you have any questions, suggestions, or just want to say hello, feel free to reach out! I'm always here to help.</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-floating mb-3">
                            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">@</span>
                            <div className="form-floating">
                                <input type="text" name="username" className="form-control" id="floatingInputGroup1" placeholder="Username" required />
                                <label htmlFor="floatingInputGroup1">Username</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea name="message" className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} required></textarea>
                            <label htmlFor="floatingTextarea2">Any message for me???</label>
                        </div>
                        <button type="submit" className="btn btn-outline-info w-100">Send Message</button>
                    </form>
                    <div className="mt-3 text-center">
                        <h5>Contact Information</h5>
                        <p>Email: <a href="mailto:rishikeshpurohit94@gmail.com">rishikeshpurohit94@gmail.com</a></p>
                        <p>Phone: (+91) 91376-27535</p>
                        <p>Follow me on social media!</p>
                        <div>
                            <a href="https://www.instagram.com/mollen_mist_99/?hl=en" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="mx-2" size={24} style={{ color: '#E1306C' }} />
                            </a>
                            <a href="https://github.com/rishi-ally/rishi-ally" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="mx-2" size={24} style={{ color: '#333' }} />
                            </a>
                            <a href="https://linkedin.com/in/rishikesh-purohit-56506527b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="mx-2" size={24} style={{ color: '#0077B5' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
