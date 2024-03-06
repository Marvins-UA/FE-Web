import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function DividingLine (props){
    const {size} = props;

    return (
        <div className={cn('DividingLine', {
            'SizeBig': size === 'big',
            'SizeSmall': size === 'small',
        })}>
        </div>
    )
}

DividingLine.propTypes = {
    size:PropTypes.oneOf(['big', 'small'])
}

DividingLine.defaultProps = {
    size:'big',
}

export default DividingLine;
