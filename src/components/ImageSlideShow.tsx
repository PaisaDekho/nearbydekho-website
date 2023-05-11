import '../styles/ImageSlider.css'

import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";
import image4 from "/image4.png";

function Slideshow() {
    const Images = [
        {
            src: image1,
            data: [
                {
                    src: '/beer.png',
                    text: "Bar"
                },
                {
                    src: "/cofee.png",
                    text: "cafe"
                }, {
                    src: "/burger.png",
                    text: "Restaurant"
                }, {
                    src: "/disco.png",
                    text: 'Clubs'
                }
            ]
        }, {
            src: image2,
            data: [
                {
                    src: '/mic.png',
                    text: "StandUp Show"
                },
                {
                    src: "/music.png",
                    text: "Music Fest"
                }, {
                    src: "/crowd.jpg",
                    text: "Concert"
                }, {
                    src: "/crowd2.jpg",
                    text: 'Exhibition'
                }
            ]
        },
        {
            src: image3,
            data: [
                {
                    src: '/person.jpg',
                    text: "Add Professional"
                },
                {
                    src: "/Brain.png",
                    text: "Learn Skill"
                }, {
                    src: "/Learning.png",
                    text: "Build Network"
                }, {
                    src: "/share.png",
                    text: 'Share Idea'
                }
            ]
        },
        {
            src: image4,
            data: [
                {
                    src: '/flat.jpg',
                    text: "Search Flats"
                },
                {
                    src: "/flatmate.png",
                    text: "Search Flatmates"
                }, {
                    src: "/number0.png",
                    text: "Broker & Brokrage"
                }, {
                    src: "/verified.png",
                    text: 'Verified Users'
                }
            ]
        }
    ]

    function boxClases(index: number) {
        switch (index) {
            case 0:
                return "boxo boxo1"
            case 1:
                return "boxo boxo2"
            case 2:
                return "boxo boxo3"
            case 3:
                return "boxo boxo4"
            default:
                return "boxo boxo1"
        }
    }



    return (
        <div className="slide_show">
            {Images.map((item, index) => (
                <div key={item.src} className='img'>
                    {item.data.map((it, index) => (
                        <div key={it.src} className={boxClases(index)}>
                            <img className='image_slide' src={it.src} />
                            <p className='slid_text'>{it.text}</p>
                        </div>
                    ))}
                    <img src={item.src} className='slide_img' />

                </div>
            ))}
        </div>
    );
}

export default Slideshow;