import './style.scss';
import AdvantagesTextBlock from "../../molecules/AdvantagesTextBlock";
import Typography from "../../atoms/Typography";
import ISOImg from "../../atoms/Icons/ISOImg.png"

function AdvantagesBlock() {
    return (
        <div className="AdvantagesBlock" id='advantagesSection'>
            <div className='AdvantagesTitle'>
                <Typography variant='title3' fontWeight='body3'>ЧОМУ САМЕ МИ?</Typography>
            </div>
            <div className='AdvantagesContent'>
                <AdvantagesTextBlock />
                <img src={ISOImg} className='ISOImg'/>
            </div>
        </div>
    );
}

export default AdvantagesBlock;
