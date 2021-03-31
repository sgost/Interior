import React from "react";
import { Carousel } from 'antd';
import "../styles/Workcarousal.scss"

function Workcarousal() {

    return (
        <div className="workcarousal">
                <Carousel>
                    <div className="Workcarousalimg">
                        <img src="https://i.ibb.co/k4mDfjg/Frame-476.png" alt="pdsliderimg" />
                    </div>
                    <div className="Workcarousalimg">
                        <img src="https://i.ibb.co/tXL7Rzd/Frame-478.png" alt="pdsliderimg" />
                    </div>
                </Carousel>
        </div>
    );
}
export default Workcarousal;
