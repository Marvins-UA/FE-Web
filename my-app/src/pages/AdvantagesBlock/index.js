import './style.scss';
import AdvantagesTextBlock from "../../molecules/AdvantagesTextBlock";
import Typography from "../../atoms/Typography";
import ISOImg from "../../atoms/Icons/ISOImg.png"
import DividingBlock from "../../molecules/DividingBlock";

function AdvantagesBlock() {
    return (
        <div className="AdvantagesBlock" id='advantagesSection'>
            <div className='AdvantagesTitle'>
                <Typography variant='title3' fontWeight='body3'>ЧОМУ САМЕ МИ?</Typography>
            </div>
            <div className='AdvantagesTitleMobile'>
                <Typography variant='title16' fontWeight='body3'>ЧОМУ САМЕ МИ?</Typography>
            </div>
            <div className='AdvantagesContent'>
                <AdvantagesTextBlock/>
                <div className='ISODivideBlock'>
                    <img src={ISOImg} className='ISOImg'/>
                    <div className='AdvantageDivideBlock'>
                        <DividingBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvantagesBlock;
