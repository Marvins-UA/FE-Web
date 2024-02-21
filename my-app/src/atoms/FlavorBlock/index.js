import React from "react";
import './style.scss';
import Typography from "../Typography";

function FlavorBlock (props){
    const {title, img} = props;

    return (
        <div className='FlavorBlock'>
            <img className='FlavorImg' src={img}/>
            <div className='FlavorTitle'>
                <Typography variant='title4' fontWeight='body3'>{title}</Typography>
            </div>
            <div className='FlavorTitleMobile'>
                <Typography variant='title5' fontWeight='body3'>{title}</Typography>
            </div>
        </div>
    )
}

export default FlavorBlock;
