import FlavorBlock from "../../atoms/FlavorBlock";
import MintFlavorImg from "../../atoms/Icons/MintFlavorImg.png";
import BerriesFlavorImg from "../../atoms/Icons/BerriesFlavorImg.png";
import CitrusFlavorImg from "../../atoms/Icons/CitrusFlavorImg.png";
import WatermelonFlavorImg from "../../atoms/Icons/WatermelonFlavorImg.png";
import './style.scss';
import React from "react";

function FlavorsOptions() {
    return (
        <div className='FlavorsOptionsBlock'>
            <FlavorBlock title='Карпатська м’ята' img={MintFlavorImg}/>
            <FlavorBlock title='Ягідний мікс' img={BerriesFlavorImg}/>
            <FlavorBlock title='Цитрусовий мікс' img={CitrusFlavorImg}/>
            <FlavorBlock title='Кавун' img={WatermelonFlavorImg}/>
        </div>
    );
}

export default FlavorsOptions;