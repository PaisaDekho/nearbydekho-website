import { FormEvent, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { app } from "../utils/clients";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const db = getFirestore(app);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(collection(db, "contact-data"), {
      fullName,
      email,
      phone,
      message,
    });

    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="w-[90%] min-h-[80vh] items-center flex-col lg:flex-row justify-between bg-[#1a1a1a] flex p-8 rounded-[24px] mx-auto">
      <div className="lg:w-1/2">
        <h1 className="text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#ff0060] to-[#ff4745]">
          Get in Touch with Us
        </h1>
        <p className="text-xs md:text-sm my-4">
          We are always happy to hear from our website visitors. If you have any
          questions, comments, or feedback for us, please don't hesitate to fill
          out the contact form below. We will get back to you as soon as
          possible. Thank you for your interest in our website and we look
          forward to hearing from you!
        </p>
        <div className="flex text-sm items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            ></path>
          </svg>
          <p>+91 - 8503013358</p>
        </div>

        <div className="flex text-sm mt-3 items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            ></path>
          </svg>
          <p>
            <a href="mailto:info@above-edge.com">info@above-edge.com</a>
          </p>
        </div>
        <div className="flex text-sm mt-3 items-start space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            ></path>
          </svg>
          <p>
            63-B RK Puram, Near FS The Coronation <br /> Prabhu Dayal Marg,
            Jagatpura <br /> Jaipur, Rajasthan - 302029
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm font-medium">A product of</p>
          <h3 className="text-xl font-semibold">
            ABOVE EDGE TECH SOLUTIONS PVT LTD
          </h3>
        </div>
      </div>
      <div className="lg:w-[40%] w-full mt-5 md:w-[70%] mx-auto h-[500px]">
        <h2 className="text-2xl text-[#ff4546]">Contact Form</h2>
        <form className="flex flex-col space-y-3 mt-5" onSubmit={handleSubmit}>
          <label htmlFor="full_name" className="text-xs">
            Full Name
          </label>
          <input
            type="text"
            className="border-none text-zinc-900 outline-none bg-[#ededee] rounded-lg px-4 py-2"
            id="full_name"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-none text-zinc-900 outline-none bg-[#ededee] rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone" className="text-xs">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border-none text-zinc-900 outline-none bg-[#ededee] rounded-lg px-4 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="message" className="text-xs">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border-none text-zinc-900 outline-none bg-[#ededee] rounded-lg px-4 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <input
            className="block w-full text-white bg-gradient-to-tr py-2 rounded-xl shadow-2xl cursor-pointer shadow-rose-600 from-[#ff4546] to-[#f5254d]"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      {success && (
        <div className="fixed bg-[#101010bf] top-0 flex flex-col h-screen w-full left-0 z-30 items-center justify-center ">
          <div className=" w-[90%] lg:w-[35%] rounded-2xl z-50 relative max-h-[400px] bg-white text-black p-8 ">
            <video loop className="w-full h-[200px]" muted autoPlay>
              <source src="https://d204mdjt2q4azq.cloudfront.net/check-mark.mp4" />
            </video>
            <h2 className="text-center text-lg font-medium">
              Your Response is successfully submitted . Someone from our team
              will contact you soon
            </h2>
            <a
              href="/"
              className="bg-green-500 inline-block text-center shadow-lg rounded-lg shadow-green-200 mt-2 w-full py-2  text-white"
            >
              Back
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
