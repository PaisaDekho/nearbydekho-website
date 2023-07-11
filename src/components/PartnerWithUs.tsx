import { FormEvent, useState } from "react";
import "../style.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../utils/clients";

const PartnerWitUs = () => {
  const [loading, setLoading] = useState(true);

  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");

  const db = getFirestore(app);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(collection(db, "partner_with_us"), {
      propertyType,
      propertyName,
      contactPersonName,
      emailAddress,
      phoneNumber,
      pinCode,
    });

    setPhoneNumber("");
    setEmailAddress("");
    setPinCode("");
    setContactPersonName("");
    setPropertyName("");
    setPropertyType("");

    setLoading(false);
  };

  return (
    <div className="partner_with_us">
      <div className="box1">
        <h1>Partner with Us and Grow Your Business</h1>
        <img src="https://d204mdjt2q4azq.cloudfront.net/illu.png" />
        <p>
          To partner with us, please fill the form below and one of our
          executive will contact you shortly.
        </p>
      </div>
      <div className="box2">
        <h2>Partner With us</h2>
        <form onSubmit={handleSubmit}>
          {/* {loading && <>
                        <Loader />
                    </>} */}
          <label htmlFor="property_type">Type Of Property</label>
          <select
            id="property_type"
            required
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option disabled>Select Property</option>
            <option value={"Restaurant"}>Restaurant</option>
            <option value={"Clubs"}>Clubs</option>
            <option value={"Cafe"}>Cafe</option>
            <option value={"Flat"}>Flat</option>
            <option value="Pg">PG</option>
          </select>

          {propertyType != "Flat" && (
            <>
              <label htmlFor="Owner_name">Property Name</label>
              <input
                value={propertyName}
                required
                onChange={(e) => setPropertyName(e.target.value)}
                type="text"
              />
            </>
          )}
          <label htmlFor="email">Contact Person Name</label>
          <input
            value={contactPersonName}
            required
            onChange={(e) => setContactPersonName(e.target.value)}
            type="text"
          />

          <label htmlFor="email">Email Address</label>
          <input
            value={emailAddress}
            required
            onChange={(e) => setEmailAddress(e.target.value)}
            type="email"
            id="email"
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            required
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phone"
          />
          <label htmlFor="pin">PinCode</label>
          <input
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            required
            type="number"
            id="pin"
          />
          <input className="button" type="submit" value={"submit"} />
        </form>
      </div>
    </div>
  );
};

export default PartnerWitUs;
