import image1 from '/3 3.png'
import image2 from '/2 3.png'
import image3 from '/1 3.png'
import iamge4 from '/4 3.png'

const Deals = () => {
    const Images = [
        {
            src: image2,
            text: 'Build Your Network, Learn, Share and Connect with Professionals'
        }
        , {
            src: image3,
            text: "No Broker No Brokerage Get Verified Flats & FlatMates Nearby You"
        }, {
            src: iamge4,
            text: "Lookout and Attend the Events Happening Near You"
        },
        {
            src: image1,
            text: "Get Exciting Deals and Discounts everytime you visit Restaurant, Cafe, Club and Bar Near You"

        },
    ]


    return (
        <div className='deal_show'>
            {Images.map(item => (
                <div key={item.src} className='deals'>
                    <img src={item.src} />
                    <p>{item.text}</p>
                </div>
            ))}

        </div>
    )
}


export default Deals