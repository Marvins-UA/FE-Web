import React from "react";
import {ReactComponent as GreenArrow} from "../Icons/GreenArrow.svg";
// import GreenArrow from '../Icons/GreenArrow.svg'
import './style.scss';

function CooperationTextBlock (props){
    return (
        <div className='CooperationText'>
            <GreenArrow className='GreenArrow'/>
            {props.children}
        </div>
    )}

export default CooperationTextBlock;
