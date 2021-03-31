import React, { useState } from 'react';
import pd1 from "../data/assets/pd1.png"
import pd2 from "../data/assets/pd2.png"
import pd3 from "../data/assets/pd3.png"
// import pd4 from "../data/assets/pd4.png"
import "../styles/PDslider.scss"

const imageData = [
    {
        "image": pd1,
    },
    {
        "image": pd2,
    },
    {
        "image": pd3,
    },
    {
        "image": pd2,
    },
]
const Pslider = () => {

    const [dispImg, setDisp] = useState('');
    const [cardIndex, setIndex] = useState();
    const [dispImgStyle, seTStyle] = useState({ display: 'flex' });

    const showImage = (event) => {

        setDisp(imageData[Number(event.target.id)].image);
        setIndex(Number(event.target.id));
        seTStyle({ display: 'flex' });

    }


    const slider_cards = imageData.map(function (obj, ind) {

        return (<div className="slider_cards" key={ind}>
            <span onClick={showImage} role="presentation"><img src={obj.image} id={ind}  alt="pdimage" /></span>
        </div>);
    });
    return (
        <>
            <div className="slider_cards_bg">
                <div className="slider_cards_disp" style={dispImgStyle}>
                    <img src={dispImg} alt={cardIndex} />
                </div>
                <div className="slider_cards_touch">
                    {slider_cards}
                </div>
            </div>
        </>
    );

}

export default Pslider;