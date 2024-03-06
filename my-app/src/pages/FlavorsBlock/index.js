import Typography from "../../atoms/Typography";
import EmojiIcon from "../../atoms/Icons/EmojiIcon.svg"
import './style.scss';
import FlavorsOptions from "../../molecules/FlavorsOptions";
import FlavorsTextBlock from "../../molecules/FlavorsTextBlock";
import DividingBlock from "../../molecules/DividingBlock";

function FlavorsBlock() {
    return (
        <div className="FlavorsBlock" id='flavorsSection'>
            <div className='FlavorsDiv'>
                <div className='FlavorsHeaderDiv'>
                    <div className='FlavorsHeader'>
                        <div className='MainTitleFlavor'>
                            <Typography fontWeight='body3' variant='title3'>СМАКИ</Typography>
                        </div>
                        <img src={EmojiIcon} className='EmojiIcon'/>
                    </div>
                </div>
                <div className='MainTitleFlavorMobile'>
                    <Typography fontWeight='body3' variant='title16'>СМАКИ</Typography>
                </div>
                <div className='FlavorsContentMobile'>
                    <FlavorsOptions/>
                    <div className='FlavorsDividingBlock'>
                        <DividingBlock/>
                    </div>
                </div>
            </div>
            <FlavorsTextBlock/>
        </div>
    );
}

export default FlavorsBlock;
