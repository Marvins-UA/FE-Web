import React from "react";
import {ReactComponent as LightArrow} from "../../atoms/Icons/LightArrowIcon.svg";
import {ReactComponent as DarkArrow} from "../../atoms/Icons/DarkArrowIcon.svg";
import './style.scss';

function ArrowsBlock (props){
    return (
        <div className='ArrowsBlock'>
            <div className='TwoArrowsBlock'>
                <DarkArrow className='DarkArrow'/>
                <LightArrow className='LightArrow'/>
            </div>
            <div className='TwoArrowsBlock'>
                <DarkArrow className='DarkArrow'/>
                <LightArrow className='LightArrow'/>
            </div>
            <div className='TwoArrowsBlock'>
                <DarkArrow className='DarkArrow'/>
                <LightArrow className='LightArrow'/>
            </div>
            <div className='TwoArrowsBlock'>
                <DarkArrow className='DarkArrow'/>
                <LightArrow className='LightArrow'/>
            </div>
        </div>
    )
}

export default ArrowsBlock;
