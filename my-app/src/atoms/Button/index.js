import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Button (props){
    const {backgrndColor, children} = props;

    return (
        <button className={cn('AppButton', {
            'BackgroundColorBlue': backgrndColor === 'blue',
            'BackgroundColorGreen': backgrndColor === 'green',
        })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    backgrndColor:PropTypes.oneOf(['blue', 'green'])}

Button.defaultProps = {
    backgrndColor:'blue',
}

export default Button;
