import React from "react";
import './style.scss';
import DividingLine from "../../atoms/DividingLine";
import LightArrow from "../../atoms/Icons/LightArrowMobile.svg";
import DarkArrow from "../../atoms/Icons/DarkArrowMobile.svg";
function DividingBlock (){

    return (
        <div className='DividingBlock'>
            <DividingLine size='big' />
            <div className='DividingBlockArrows'>
                <img src={DarkArrow} className='DarkArrowMobile'/>
                <img src={LightArrow} className='LightArrowMobile'/>
            </div>
            <DividingLine size='big' />
        </div>
    )
}

export default DividingBlock;
