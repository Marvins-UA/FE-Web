import Typography from "../../atoms/Typography";
import EmojiIcon from "../../atoms/Icons/EmojiIcon.svg"
import './style.scss';
import FlavorsOptions from "../../molecules/FlavorsOptions";
import FlavorsTextBlock from "../../molecules/FlavorsTextBlock";

function FlavorsBlock() {
    return (
        <div className="FlavorsBlock">
            <div className='FlavorsDiv'>
            <div className='FlavorsHeaderDiv'>
                <div className='FlavorsHeader'>
                    <div className='MainTitleFlavor'>
                        <Typography fontWeight='body3' variant='title3'>СМАКИ</Typography>
                    </div>
                    <div>
                        <img src={EmojiIcon} className='EmojiIcon'/>
                    </div>
                </div>
                <FlavorsOptions />
            </div>
                <FlavorsTextBlock />
            </div>
        </div>
    );
}

export default FlavorsBlock;
