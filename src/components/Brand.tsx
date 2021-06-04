import React from 'react';
import brand1 from "../assets/cee-cees-closet.png"
import brand2 from "../assets/nalata-nalata.png"
import brand3 from "../assets/kirrin-finch.png"
import brand4 from "../assets/tokyo-bike.png"
import brand5 from "../assets/meso-goods.png"
import brand6 from "../assets/coco-and-breezy.png"
import brand7 from "../assets/brooklyn-museum.png"
import brand8 from "../assets/adore-me.png"

function Brand() {
    return (
        <section className="site-brand">
            <img src={brand1} alt="brand1" />
            <img src={brand2} alt="brand2" />
            <img src={brand3} alt="brand3" />
            <img src={brand4} alt="brand4" />
            <img src={brand5} alt="brand5" />
            <img src={brand6} alt="brand6" />
            <img src={brand7} alt="brand7" />
            <img src={brand8} alt="brand8" />
        </section>
    );
}

export default Brand;
