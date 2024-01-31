import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Typography (props){
    const {variant, color, fontWeight} = props;
    return (
        <p className={cn('AppTypography', {
            'SizeTitle1': variant === 'title1',
            'SizeTitle2': variant === 'title2',
            'SizeTitle3': variant === 'title3',
            'SizeTitle4': variant === 'title4',
            'SizeTitle5': variant === 'title5',
            'SizeTitle6': variant === 'title6',
            'SizeTitle7': variant === 'title7',
            'SizeTitle8': variant === 'title8',
            'SizeTitle9': variant === 'title9',
            'SizeTitle10': variant === 'title10',
            'SizeTitle11': variant === 'title11',
            'FontWeightBody1': fontWeight === 'body1',
            'FontWeightBody2': fontWeight === 'body2',
            'FontWeightBody3': fontWeight === 'body3',
            'FontWeightBody4': fontWeight === 'body4',
            'FontWeightBody5': fontWeight === 'body5',
            'TextColorWhite': color === 'white',
            'TextColorDarkGrey': color === 'darkGrey',
            'TextColorGrey': color === 'grey',
            'TextColorLightGrey': color === 'lightGrey',
            'TextColorGreen': color === 'green',
            'TextColorYellow': color === 'yellow',
        })}>{props.children}</p>
    )}

Typography.propTypes = {
    fontWeight:PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.oneOf(['white', 'grey', 'lightGrey', 'green', 'yellow', 'darkGrey']),
}

Typography.defaultProps = {
    color:'white',
    fontWeight:'body3',
}

export default Typography;
