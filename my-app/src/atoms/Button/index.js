import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Button (props){
    const {backgrndColor, size, children, mobile, ...baseProps} = props;

    return (
        <button className={cn('AppButton', {
            'BackgroundColorBlue': backgrndColor === 'blue',
            'BackgroundColorGreen': backgrndColor === 'green',
            'SizeBig': size === 'big',
            'SizeMedium': size === 'medium',
            'SizeSmall': size === 'small',
        })}
        {...baseProps}>
            {children}
        </button>
    )
}

Button.propTypes = {
    backgrndColor:PropTypes.oneOf(['blue', 'green']),
    size:PropTypes.oneOf(['big', 'medium', 'small'])
}

Button.defaultProps = {
    backgrndColor:'blue',
}

export default Button;
