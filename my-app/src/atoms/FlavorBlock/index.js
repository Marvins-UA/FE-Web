import React from "react";
import './style.scss';
import Typography from "../Typography";

function FlavorBlock (props){
    const {title, img} = props;

    return (
        <div className='FlavorBlock'>
            <img src={img}/>
            <Typography fontWeight=''>{title}</Typography>
        </div>
    )
}

export default FlavorBlock;
