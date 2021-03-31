import React from "react";
import '../styles/PDslider2.scss'
import { Carousel } from 'antd';

function PDslider2() {

    return (
        <div className="pdslilder2">
            <div className="pdslilder2head">
                <Carousel autoplay>
                    <div className="pdslilder2_cont">
                        <img src="https://i.ibb.co/k4mDfjg/Frame-476.png" alt="pdsliderimg" />
                    </div>
                    <div className="pdslilder2_cont">
                        <img src="https://i.ibb.co/tXL7Rzd/Frame-478.png" alt="pdsliderimg" />
                    </div>
                    <div className="pdslilder2_cont">
                        <img src="https://i.ibb.co/gD9dRHS/Frame-474.png" alt="pdsliderimg" />
                    </div>
                    <div className="pdslilder2_cont">
                        <img src="https://i.ibb.co/tXL7Rzd/Frame-478.png" alt="pdsliderimg" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default PDslider2;
