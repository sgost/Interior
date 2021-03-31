import React, { useState } from 'react';
import "../styles/recentproject.scss"
import img1 from "../data/assets/image 6.png"
import img2 from "../data/assets/image 2.png"
import img3 from "../data/assets/image 13.png"
import img4 from "../data/assets/image 3.png"
import img5 from "../data/assets/image 7.png"
import img6 from "../data/assets/image 5.png"
import img7 from "../data/assets/image 4.png"
import close from "../data/assets/cancel.svg"
const imageData = [
    {
        "image": img1,
        class: "div1"
    },
    {
        "image": img2,
        class: "div2"
    },
    {
        "image": img3,
        class: "div3"
    },
    {
        "image": img4,
        class: "div4"
    },
    {
        "image": img5,
        class: "div5"
    },
    {
        "image": img6,
        class: "div6"
    },
    {
        "image": img7,
        class: "div7"
    },
];
const Recentproject = () => {


    const [dispImg, setDisp] = useState('');
    const [cardIndex, setIndex] = useState();
    const [dispImgStyle, seTStyle] = useState({ display: 'none' });

    const showImage = (event) => {

        setDisp(imageData[Number(event.target.id)].image);
        setIndex(Number(event.target.id));
        seTStyle({ display: 'flex' });

    }
    const closeDisp = () => {
        seTStyle({ display: 'none' });
    }

    const prevShow = () => {
        if (cardIndex === 0) {
            setIndex(imageData.length - 1);
            setDisp(imageData[imageData.length - 1].image);
        }
        else {
            let decrement = cardIndex - 1;
            setDisp(imageData[decrement].image);
            setIndex(decrement);
        }
    }

    const nextShow = () => {

        if (cardIndex === imageData.length - 1) {
            setIndex(0);
            setDisp(imageData[0].image);
        }
        else {
            let increment = cardIndex + 1;
            setDisp(imageData[increment].image);
            setIndex(increment);
        }
    }


    const card = imageData.map(function (obj, ind) {

        return (<div className={obj.class} key={ind} id="div">
            <span onClick={showImage} role="presentation"><img src={obj.image} id={ind} alt="pdimage" /></span>
        </div>);
    });
    return (
        <>
            <div className="landingSlider">
                <h1>Some Recent Projects</h1>
                <div id="container">
                    {card}
                </div>
                <section className="lightbox" style={dispImgStyle}>
                    <span className="close" onClick={closeDisp} role="presentation"><img src={close} alt="cancel"/></span>
                    <div className="carousel left" onClick={prevShow} role="presentation">
                        <span></span><span></span>
                    </div>
                    <div className="carousel right" onClick={nextShow} role="presentation">
                        <span></span><span></span>
                    </div>
                    <img src={dispImg} alt={dispImg} />
                </section>
            </div>
        </>
    );

}

export default Recentproject;