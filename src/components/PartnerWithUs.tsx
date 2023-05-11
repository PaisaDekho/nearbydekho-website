import { FormEvent, useState } from 'react'
import '../style.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../utils/clients';
import Loader from './Loader';

const ParnerWitUs = () => {

    const [loading, setLoading] = useState(true)

    const [propertyType, setPropertyType] = useState("");
    const [propertyName, setPropertyName] = useState("");
    const [contactPersonName, setContactPersonName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pinCode, setPinCode] = useState("");


    const db = getFirestore(app)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        await addDoc(collection(db, 'partner_with_us'), {
            propertyType,
            propertyName,
            contactPersonName,
            emailAddress,
            phoneNumber,
            pinCode
        })

        setPhoneNumber("")
        setEmailAddress("")
        setPinCode("")
        setContactPersonName("")
        setPropertyName("")
        setPropertyType("")

        setLoading(false)
    }

    return (
        <div className="partner_with_us">
            <div className='box1'>
                <h1>Partner with Us and Grow Your Business</h1>
                <img src="/illu.png" />
                <p>
                    Our platform provides a range of features and benefits that can help you increase your online
                    visibility, boost your sales, and gain valuable insights into your customer base.
                    By creating a profile on our platform, you'll be able to showcase your restaurant,
                    cafe or club to a wider audience
                    Our platform is cost-effective and easy-to-use, which means you can focus on what you do best - providing delicious food and excellent service to your customers.
                    Join us today and start growing your restaurant business!</p>
            </div>
            <div className='box2'>
                <h2>List Your Business</h2>
                <form onSubmit={handleSubmit}>

                    {/* {loading && <>
                        <Loader />
                    </>} */}
                    <label htmlFor='property_type'>
                        Type Of Property
                    </label>
                    <select id='property_type' required value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                        <option disabled>Select Property</option>
                        <option value={"Restaurant"}>Restaurant</option>
                        <option value={"Clubs"}>Clubs</option>
                        <option value={"Cafe"}>Cafe</option>
                        <option value={"Flat"}>Flat</option>
                        <option value="Pg">PG</option>
                    </select>

                    {propertyType != "Flat" && (
                        <>
                            <label htmlFor='Owner_name'>
                                Property Name
                            </label>
                            <input value={propertyName}
                                required
                                onChange={(e) => setPropertyName(e.target.value)} type='text' />
                        </>
                    )}
                    <label htmlFor='email'>
                        Contact Person Name
                    </label>
                    <input value={contactPersonName}
                        required
                        onChange={(e) => setContactPersonName(e.target.value)} type='text' />

                    <label htmlFor='email'>
                        Email Address
                    </label>
                    <input value={emailAddress}
                        required
                        onChange={(e) => setEmailAddress(e.target.value)} type='email' id='email' />
                    <label htmlFor='phone'>
                        Phone Number
                    </label>
                    <input required type='tel' value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} id='phone' />
                    <label htmlFor='pin'>
                        PinCode
                    </label>
                    <input value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)} required type='number' id='pin' />
                    <input className='button' type='submit' value={"submit"} />
                </form>
            </div>
        </div>
    )
}



export default ParnerWitUs