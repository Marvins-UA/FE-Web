import Typography from "../../atoms/Typography";
import EmojiIcon from "../../atoms/Icons/EmojiIcon.svg"
import MintFlavorImg from "../../atoms/Icons/MintFlavorImg.png"
import BerriesFlavorImg from "../../atoms/Icons/BerriesFlavorImg.png"
import CitrusFlavorImg from "../../atoms/Icons/CitrusFlavorImg.png"
import WatermelonFlavorImg from "../../atoms/Icons/WatermelonFlavorImg.png"
import './style.scss';
import FlavorBlock from "../../atoms/FlavorBlock";

function FlavorsBlock() {
    return (
        <div className="FlavorsBlock">
            <div className='FlavorsHeader'>
                <div className='MainTitleFlavor'>
                    <Typography fontWeight='body3' variant='title3'>СМАКИ</Typography>
                </div>
                <div>
                    <img src={EmojiIcon} className='EmojiIcon'/>
                </div>
            </div>
            <div className='FlavorsImagesBlock'>
                <FlavorBlock title='Карпатська м’ята' img={MintFlavorImg} />
                <FlavorBlock title='Ягідний мікс' img={BerriesFlavorImg} />
                <FlavorBlock title='Цитрусовий мікс' img={CitrusFlavorImg} />
                <FlavorBlock title='Кавун' img={WatermelonFlavorImg} />
            </div>
        </div>
    );
}

export default FlavorsBlock;
