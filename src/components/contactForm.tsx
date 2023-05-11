import { FormEvent, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../styles/contact.css";

import { app } from "../utils/clients";

const ContactForm = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const [loading, setLoading] = useState(false);

	const db = getFirestore(app);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true);
		await addDoc(collection(db, "contact-data"), {
			fullName,
			email,
			phone,
			message,
		});

		setFullName("")
		setEmail("")
		setPhone("")
		setMessage("")

		setLoading(false);
	};



	return (
		<div className="contact-container">
			<div className="inner-container">
				<h1>Get in Touch with Us</h1>
				<p>
					We are always happy to hear from our website visitors. If you have any
					questions, comments, or feedback for us, please don't hesitate to fill
					out the contact form below. We will get back to you as soon as
					possible. Thank you for your interest in our website and we look
					forward to hearing from you!
				</p>


				<div className="icon-container">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
					<p> <a href="mailto:info@above-edge.com">info@above-edge.com</a></p>
				</div>

				<div className="icon-container">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<p>
						45, Shivpuri Colony , Airport T - 1, Sanganer , Jaipur - 302029
					</p>
				</div>

				<div className="small_text">
					<p>A product of</p>
					<h3>ABOVEENGE TECH SOLUTIONS PVT LTD</h3>
				</div>
			</div>

			<div className="contact-form">
				<h2>Contact Form</h2>
				{loading && <p>Loading...</p>}
				<form onSubmit={handleSubmit}>
					<label htmlFor="full_name">Full Name</label>
					<input
						type="text"
						className="input"
						id="full_name"
						value={fullName}
						onChange={(event) => setFullName(event.target.value)}
						required
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						className="input"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>

					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						id="phone"
						className="input"
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
						required
					/>

					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						value={message}

						onChange={(event) => setMessage(event.target.value)}
						required
					></textarea>

					<input className="button" type="submit" value={"submit"} />
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
